import { Check } from "@repo/ui/icons/web";
import Link from "next/link";
import BackdropGradient from "@/components/global/backdrop-gradient";
import GradientText from "@/components/global/gradientText";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export function PricingSection() {
  return (
    <div className="flex w-full flex-col items-center gap-3 pt-20" id="pricing">
      <BackdropGradient className="flex h-full w-8/12 flex-col items-center opacity-40">
        <GradientText
          className="text-center text-4xl font-semibold"
          element="H2"
        >
          Pricing Plans That Fit Your Right
        </GradientText>
        <p className="text-muted-foreground pt-4 text-left text-sm md:text-center">
          Teamify is a vibrant online community platform that empowers people to
          connect, <br className="hidden md:block" />
          collaborate, and cultivate meaningful relationships
        </p>
      </BackdropGradient>
      <Card className="bg-themeBlack border-themeGray mt-10 w-full p-7 md:w-auto">
        <div className="flex flex-col gap-2">
          <CardTitle>99/m</CardTitle>
          <CardDescription className="text-[#B4B0AE]">
            Great if you’re just getting started
          </CardDescription>
          <Link className="mt-3 w-full" href="#">
            <Button
              className="w-full rounded-2xl bg-[#333337] text-white hover:text-[#333337]"
              variant="default"
            >
              Start for free
            </Button>
          </Link>
        </div>
        <div className="mt-5 flex flex-col gap-2 text-[#B4B0AE]">
          <p className="font-semibold">Features</p>
          <span className="mt-3 flex items-center gap-2">
            <Check />
            User-Friendly Dashboard
          </span>
          <span className="flex items-center gap-2">
            <Check />
            Course Management Tools
          </span>
          <span className="flex items-center gap-2">
            <Check />
            Secure Payment Processing
          </span>
          <span className="flex items-center gap-2">
            <Check />
            Mobile Application
          </span>
          <span className="flex items-center gap-2">
            <Check />
            Customizable Profiles
          </span>
        </div>
      </Card>
    </div>
  );
}
