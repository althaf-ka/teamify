"use client";
import dynamic from "next/dynamic";
import { FormGenerator } from "@/components/global/form-generator";
import { Loader } from "@/components/global/loader";
import { Button } from "@/components/ui/button";
import { TEAMIFY_CONSTANTS } from "@/constants";
import { useAuthSignUp } from "@/hooks/authentication";

const OtpInput = dynamic(
  () =>
    import("@/components/global/otp-input").then(
      (component) => component.default,
    ),
  { ssr: false },
);

function SignUpForm() {
  const {
    register,
    errors,
    verifying,
    creating,
    onGenerateCode,
    generatingCode,
    onInitiateUserRegistration,
    code,
    setCode,
    getValues,
  } = useAuthSignUp();

  return (
    <form
      className="mt-10 flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        void onInitiateUserRegistration();
      }}
    >
      {verifying ? (
        <div className="mb-5 flex justify-center">
          <OtpInput otp={code} setOtp={setCode} />
        </div>
      ) : (
        TEAMIFY_CONSTANTS.signUpForm.map((field) => (
          <FormGenerator
            {...field}
            errors={errors}
            key={field.id}
            register={register}
          />
        ))
      )}

      {verifying ? (
        <Button className="rounded-2xl" type="submit">
          <Loader loading={creating}>Sign Up with Email</Loader>
        </Button>
      ) : (
        <Button
          className="rounded-2xl"
          onClick={() =>
            void onGenerateCode(getValues("email"), getValues("password"))
          }
          type="button"
        >
          <Loader loading={generatingCode}>Generate Code</Loader>
        </Button>
      )}
    </form>
  );
}

export default SignUpForm;
