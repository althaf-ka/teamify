import { useSignIn, useSignUp } from "@clerk/nextjs";
import type { OAuthStrategy } from "@clerk/types";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { SignInSchema, SignUpSchema } from "@repo/shared/schema";
import { useSignInMutation } from "@repo/query/auth";
import { useState } from "react";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
import { onSignUpUser } from "@/actions/auth";

export const useAuthSignIn = () => {
  const { isLoaded, setActive, signIn } = useSignIn();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const onClerkAuth = async (email: string, password: string) => {
    if (!isLoaded)
      return toast("Error", {
        description: "Oops! something went wrong",
      });
    try {
      const authenticated = await signIn.create({
        identifier: email,
        password,
      });

      if (authenticated.status === "complete") {
        reset();
        await setActive({ session: authenticated.createdSessionId });
        toast("Success", {
          description: "Welcome back!",
        });
        router.push("/callback/sign-in");
      }
    } catch (error: any) {
      if (
        (error as { errors: { code: string }[] }).errors[0].code ===
        "form_password_incorrect"
      )
        toast("Error", {
          description: "Email/password is incorrect try again",
        });
    }
  };

  const { mutate: InitiateLoginFlow, isPending } = useSignInMutation(
    (email, password) => onClerkAuth(email, password),
  );

  const onAuthenticateUser = handleSubmit(
    (values: z.infer<typeof SignInSchema>) => {
      InitiateLoginFlow({ email: values.email, password: values.password });
    },
  );

  return {
    onAuthenticateUser,
    isPending,
    register,
    errors,
  };
};

export const useAuthSignUp = () => {
  const { setActive, isLoaded, signUp } = useSignUp();
  const [creating, setCreating] = useState<boolean>(false);
  const [verifying, setVerifying] = useState<boolean>(false);
  const [generatingCode, setGeneratingCode] = useState<boolean>(false);
  const [code, setCode] = useState<string>("");

  const {
    register,
    formState: { errors, isValid },
    reset,
    handleSubmit,
    getValues,
    trigger,
  } = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    mode: "onBlur",
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onGenerateCode = async (email: string, password: string) => {
    const isValidForm = await trigger();

    if (!isValidForm) return;

    if (!isLoaded)
      return toast("Error", {
        description: "Oops! something went wrong",
      });
    try {
      setGeneratingCode(true);
      if (email && password && isValid) {
        await signUp.create({
          emailAddress: getValues("email"),
          password: getValues("password"),
        });

        await signUp.prepareEmailAddressVerification({
          strategy: "email_code",
        });

        setVerifying(true);
      } else {
        return toast("Error", {
          description: "No fields must be empty",
        });
      }
    } catch (error) {
      if (isClerkAPIResponseError(error))
        toast("Error", {
          description: error.errors[0].message,
        });
      console.error(JSON.stringify(error, null, 2));
    } finally {
      setGeneratingCode(false);
    }
  };

  const onInitiateUserRegistration = handleSubmit(
    async (values: z.infer<typeof SignUpSchema>) => {
      if (!isLoaded)
        return toast("Error", {
          description: "Oops! something went wrong",
        });

      try {
        setCreating(true);
        const completeSignUp = await signUp.attemptEmailAddressVerification({
          code,
        });

        if (completeSignUp.status !== "complete") {
          return toast("Error", {
            description: "Oops! something went wrong, status in complete",
          });
        }

        if (completeSignUp.status === "complete") {
          if (!signUp.createdUserId) return;
          const user = await onSignUpUser({
            firstname: values.firstname,
            lastname: values.lastname,
            clerkId: signUp.createdUserId,
            image: "",
          });

          reset();

          if (user.status === 200) {
            toast("Success", {
              description: user.message,
            });
            await setActive({
              session: completeSignUp.createdSessionId,
            });
            router.push(`/group/create`);
          }
          if (user.status !== 200) {
            toast("Error", {
              description: `${user.message}action failed`,
            });
            router.refresh();
          }
          setCreating(false);
          setVerifying(false);
        } else {
          console.error(JSON.stringify(completeSignUp, null, 2));
        }
      } catch (error) {
        console.error(JSON.stringify(error, null, 2));
      }
    },
  );

  return {
    register,
    errors,
    onGenerateCode,
    onInitiateUserRegistration,
    verifying,
    creating,
    generatingCode,
    code,
    setCode,
    getValues,
  };
};

export const useGoogleAuth = () => {
  const { signIn, isLoaded: LoadedSignIn } = useSignIn();
  const { signUp, isLoaded: LoadedSignUp } = useSignUp();

  const signInWith = (strategy: OAuthStrategy) => {
    if (!LoadedSignIn) return;
    try {
      return signIn.authenticateWithRedirect({
        strategy,
        redirectUrl: "/callback",
        redirectUrlComplete: "/callback/sign-in",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const signUpWith = (strategy: OAuthStrategy) => {
    if (!LoadedSignUp) return;
    try {
      return signUp.authenticateWithRedirect({
        strategy,
        redirectUrl: "/callback",
        redirectUrlComplete: "/callback/complete",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return { signUpWith, signInWith };
};
