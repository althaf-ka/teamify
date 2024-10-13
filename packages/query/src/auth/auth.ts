import { useMutation } from "@tanstack/react-query";

export function useSignInMutation(
  onClerkAuth: (
    email: string,
    password: string,
  ) => Promise<string | number | undefined>,
) {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      onClerkAuth(email, password),
  });
}
