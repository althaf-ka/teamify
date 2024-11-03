import { StripeElements } from "@/components/global/stripe/elements";
import PaymentForm from "./payment-form";

interface CreateGroupProps {
  userId: string;
  affiliate: boolean;
  stripeId?: string;
}

const CreateGroup = ({ userId, affiliate, stripeId }: CreateGroupProps) => {
  return (
    <StripeElements>
      <PaymentForm affiliate={affiliate} stripeId={stripeId} userId={userId} />
    </StripeElements>
  );
};

export default CreateGroup;
