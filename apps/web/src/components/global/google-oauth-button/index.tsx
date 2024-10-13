"use client";

import { Google } from "@repo/ui/icons/web";
import { Button } from "@/components/ui/button";
import { useGoogleAuth } from "@/hooks/authentication";
import { Loader } from "../loader";

interface GoogleAuthButtonProps {
  method: "signup" | "signin";
}

export function GoogleAuthButton({ method }: GoogleAuthButtonProps) {
  const { signUpWith, signInWith } = useGoogleAuth();

  return (
    <Button
      className="bg-themeBlack border-themeGray flex w-full gap-3 rounded-2xl"
      {...(method === "signin"
        ? {
            onClick: () => void signInWith("oauth_google"),
          }
        : {
            onClick: () => void signUpWith("oauth_google"),
          })}
      variant="outline"
    >
      <Loader loading={false}>
        <Google />
        Google
      </Loader>
    </Button>
  );
}
