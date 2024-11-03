import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-09-30.acacia",
  typescript: true,
});

export const createPaymentIntent = async (amount: number) => {
  return stripe.paymentIntents.create({
    amount: amount * 100,
    currency: "inr",
    automatic_payment_methods: { enabled: true },
  });
};

export const transferCommission = async (
  destination: string,
  amount: number,
) => {
  return stripe.transfers.create({
    amount: amount * 100,
    currency: "inr",
    destination: destination,
  });
};
