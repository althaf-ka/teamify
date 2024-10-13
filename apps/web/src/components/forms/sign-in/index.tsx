"use client";

import { FormGenerator } from "@/components/global/form-generator";
import { Loader } from "@/components/global/loader";
import { Button } from "@/components/ui/button";
import { TEAMIFY_CONSTANTS } from "@/constants";
import { useAuthSignIn } from "@/hooks/authentication";

function SignInForm() {
  const { isPending, onAuthenticateUser, register, errors } = useAuthSignIn();

  return (
    <form
      className="mt-10 flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        void onAuthenticateUser();
      }}
    >
      {TEAMIFY_CONSTANTS.signInForm.map((field) => (
        <FormGenerator
          {...field}
          errors={errors}
          key={field.id}
          register={register}
        />
      ))}
      <Button className="mt-4 rounded-2xl" type="submit">
        <Loader loading={isPending}>Sign In with Email</Loader>
      </Button>
    </form>
  );
}

export default SignInForm;
