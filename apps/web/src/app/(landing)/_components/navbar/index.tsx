import React from "react";
import Link from "next/link";
import { Logout } from "@repo/ui/icons/web";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassSheet from "@/components/global/glass-sheet";
import Menu from "./menu";

function LandingPageNavbar() {
  return (
    <div className="sticky top-0 z-50 flex w-full items-center justify-between py-5">
      <p className="text-2xl font-bold">Teamify</p>
      <Menu orientation="desktop" />
      <div className="flex gap-2">
        <Link href="/sign-in">
          <Button
            className="bg-themeBlack border-themeGray hover:bg-themeGray flex gap-2 rounded-2xl"
            variant="outline"
          >
            <Logout />
            Login
          </Button>
        </Link>
        <GlassSheet
          trigger={
            <Button className="hover:bg-transparent" variant="ghost">
              <MenuIcon size={30} />
            </Button>
          }
          triggerClass="lg:hidden"
        >
          <Menu orientation="mobile" />
        </GlassSheet>
      </div>
    </div>
  );
}

export default LandingPageNavbar;
