"use server";

import { createPaymentIntent, transferCommission } from "@repo/stripe";
import { BASIC_PLAN_AMOUNT, COMMISSION_AMOUNT } from "@repo/shared/constants";
import { PaymentIntent } from "@stripe/stripe-js";

export const onGetStripeClientSecret = async () => {
  try {
    const paymentIntent = await createPaymentIntent(BASIC_PLAN_AMOUNT);

    const serializedIntent = JSON.parse(
      JSON.stringify(paymentIntent),
    ) as PaymentIntent;

    if (serializedIntent) return serializedIntent;
  } catch (error) {
    return { status: 400, message: "Failed to load form" };
  }
};

export const onTransferCommission = async (destination: string) => {
  try {
    const transfer = await transferCommission(destination, COMMISSION_AMOUNT);

    if (transfer) {
      return { status: 200 };
    }
  } catch (error) {
    return { status: 400 };
  }
};
