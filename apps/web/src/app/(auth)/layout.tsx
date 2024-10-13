import { redirect } from "next/navigation";
import React from "react";
import { onAuthenticatedUser } from "@/actions/auth";
import BackdropGradient from "@/components/global/backdrop-gradient";
import GlassCard from "@/components/global/glass-card";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = async ({ children }: AuthLayoutProps) => {
  const user = await onAuthenticatedUser();

  if (user.status === 200) redirect("/callback/sign-in");

  return (
    <div className="container flex h-screen items-center justify-center">
      <div className="flex w-full flex-col items-center pb-10 pt-32">
        <h2 className="text-themeTextWhite text-4xl font-bold">Teamify</h2>
        <BackdropGradient
          className="h-2/6 w-4/12 opacity-40"
          container="flex flex-col items-center"
        >
          <GlassCard className="xs:w-full mt-16 p-7 md:w-7/12 lg:w-5/12 xl:w-4/12">
            {children}
          </GlassCard>
        </BackdropGradient>
      </div>
    </div>
  );
};

export default AuthLayout;
