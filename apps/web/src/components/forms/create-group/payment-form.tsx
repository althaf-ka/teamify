"use client";

import { ErrorMessage } from "@hookform/error-message";
import { CardElement } from "@stripe/react-stripe-js";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FormGenerator } from "@/components/global/form-generator";
import { Loader } from "@/components/global/loader";
import { Button } from "@/components/ui/button";
import { usePayments } from "@/hooks/payment";
import { CategorySliderSkeleton } from "@/components/global/skeleton";

interface PaymentFormProps {
  userId: string;
  affiliate: boolean;
  stripeId?: string;
}

const GroupList = dynamic(
  () =>
    import("@/components/global/group-list-slider").then(
      (component) => component.GroupListSlider,
    ),
  {
    ssr: false,
    loading: () => (
      <CategorySliderSkeleton count={8} labelClassName="w-28" showLabel />
    ),
  },
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars -- it will be used later
const PaymentForm = ({ affiliate, userId, stripeId }: PaymentFormProps) => {
  const {
    onCreateGroup,
    isPending,
    register,
    errors,
    isCategory,
    creatingIntent,
  } = usePayments(userId, affiliate);

  return (
    <div className="min-h-full">
      <Loader className="min-h-60" loading={creatingIntent}>
        <form
          className="pt-5"
          onSubmit={(e) => {
            e.preventDefault();
            void onCreateGroup();
          }}
        >
          <GroupList
            label="Select Category"
            register={register}
            selected={isCategory}
            slidesOffsetBefore={28}
          />
          <div className="mb-2 px-7">
            <ErrorMessage
              errors={errors}
              name="category"
              render={({ message }) => (
                <p className="mt-2 text-sm font-medium text-red-400">
                  {message === "Required" ? "" : message}
                </p>
              )}
            />
          </div>
          <div className="px-7">
            <h5 className="text-themeTextWhite mt-5 pb-2 text-base font-bold">
              Enter Group Name
            </h5>
            <FormGenerator
              errors={errors}
              inputType="input"
              name="name"
              placeholder="Group Name"
              register={register}
              type="text"
            />
          </div>
          <div className="my-3 px-7">
            <h5 className="text-themeTextWhite pb-2 text-base font-bold">
              Card Details
            </h5>
            <CardElement
              className="bg-themeBlack border-themeGray rounded-lg border-[1px] p-3 outline-none"
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#B4B0AE",
                    "::placeholder": {
                      color: "#B4B0AE",
                    },
                  },
                },
              }}
            />
          </div>
          <div className="flex flex-col gap-5 px-7">
            <p className="text-themeTextGray text-xs">
              Cancel anytime with 1-click. By clicking below, you accept our
              terms.
            </p>
            <Link
              className="text-themeTextGray hover:text-themeTextWhite mt-2 text-sm"
              href="/explore"
            >
              Skip for now
            </Link>
            <Button
              className="bg-themeBlack border-themeGray rounded-xl"
              type="submit"
              variant="outline"
            >
              <Loader loading={isPending}>Get Started</Loader>
            </Button>
          </div>
        </form>
      </Loader>
    </div>
  );
};

export default PaymentForm;
