"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CreateGroupSchema } from "@repo/shared/schema";
import { useStripeQueries } from "@repo/query/payment";
import { useGroupMutations } from "@repo/query/group";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe, PaymentIntent } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import {
  onGetStripeClientSecret,
  onTransferCommission,
} from "@/actions/payments";
import { onCreateNewGroup } from "@/actions/groups";

export const useStripeElements = () => {
  const StripePromise = () =>
    loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY!);

  return { StripePromise };
};

export const usePayments = (
  userId: string,
  affiliate: boolean,
  stripeId?: string,
) => {
  const [isCategory, setIsCategory] = useState<string | undefined>(undefined);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const { createPaymentIntent } = useStripeQueries();
  const { createGroupMutation } = useGroupMutations();

  const {
    reset,
    handleSubmit,
    formState: { errors },
    register,
    watch,
  } = useForm<z.infer<typeof CreateGroupSchema>>({
    resolver: zodResolver(CreateGroupSchema),
    defaultValues: {
      category: "",
    },
  });

  useEffect(() => {
    const categoryOptions = watch(({ category }) => {
      if (category) {
        setIsCategory(category);
      }
    });

    return () => {
      categoryOptions.unsubscribe();
    };
  }, [watch]);

  const { data: Intent, isPending: creatingIntent } = createPaymentIntent(
    onGetStripeClientSecret,
  );

  const { mutateAsync: createGroup, isPending } = createGroupMutation(
    async (data: z.infer<typeof CreateGroupSchema>) => {
      if (!stripe || !elements || !Intent) {
        return null;
      }

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        (Intent as PaymentIntent).client_secret!,
        {
          payment_method: {
            card: elements.getElement(CardElement)!,
          },
        },
      );

      if (error) {
        return toast("Error", {
          description: "Oops! something went wrong, try again later",
        });
      }

      if (paymentIntent?.status === "succeeded") {
        if (affiliate) {
          await onTransferCommission(stripeId!);
        }
        const created = await onCreateNewGroup(userId, data);

        if (created && created.status === 200) {
          toast("Success", {
            description: created.message,
          });
          router.push(
            `/group/${created.data?.group[0].id}/channel/${created.data?.group[0].channel[0].id}`,
          );
        }
        if (created && created.status !== 200) {
          reset();
          return toast("Error", {
            description: created.message,
          });
        }
      }
    },
  );

  const onCreateGroup = handleSubmit(async (values) => createGroup(values));

  return {
    onCreateGroup,
    isPending,
    register,
    errors,
    isCategory,
    creatingIntent,
  };
};
