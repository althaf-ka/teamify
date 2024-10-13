import SignUpForm from "@/components/forms/sign-up";
import { GoogleAuthButton } from "@/components/global/google-oauth-button";
import { Separator } from "@/components/ui/separator";

function SignUpPage() {
  return (
    <>
      <h5 className="text-themeTextWhite text-2xl font-bold">Signup</h5>
      <p className="text-themeTextGray mt-2 leading-tight">
        Network with people from around the world, join groups, create your own,
        watch courses and become the best version of yourself.
      </p>
      <SignUpForm />
      <div className="relative my-10 w-full">
        <div className="text-themeTextGray absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-black p-3 text-xs">
          OR CONTINUE WITH
        </div>
        <Separator className="bg-themeGray" orientation="horizontal" />
      </div>
      <GoogleAuthButton method="signup" />
    </>
  );
}

export default SignUpPage;
