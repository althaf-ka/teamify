"use client";

import { Elements } from "@stripe/react-stripe-js";
import { useStripeElements } from "@/hooks/payment";

interface StripeElementsProps {
  children: React.ReactNode;
}

export const StripeElements = ({ children }: StripeElementsProps) => {
  const { StripePromise } = useStripeElements();

  const promise = StripePromise();

  return promise != null ? (
    <Elements stripe={promise}>{children}</Elements>
  ) : null;
};
