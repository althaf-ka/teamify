import { useQuery } from "@tanstack/react-query";

export const useStripeQueries = () => {
  const createPaymentIntent = <T>(getClientSecretFn: () => Promise<T>) =>
    useQuery<T>({
      queryKey: ["payment-intent"],
      queryFn: () => getClientSecretFn(),
    });

  return { createPaymentIntent };
};
