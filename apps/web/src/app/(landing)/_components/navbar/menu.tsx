"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { TEAMIFY_CONSTANTS } from "@/constants";
import { cn } from "@/lib/utils";
import { useNavigation } from "../../../../hooks/navigation";

interface MenuProps {
  orientation: "mobile" | "desktop";
}

function Menu({ orientation }: Readonly<MenuProps>) {
  const { section, onSetSection } = useNavigation();

  switch (orientation) {
    case "desktop":
      return (
        <Card className="bg-themeGray border-themeGray backdrop--blur__safari hidden rounded-xl bg-opacity-60 bg-clip-padding p-1 backdrop-blur-2xl backdrop-filter lg:flex">
          <CardContent className="flex gap-2 p-0">
            {TEAMIFY_CONSTANTS.landingPageMenu.map((menuItem) => (
              <Link
                href={menuItem.path}
                {...(menuItem.section && {
                  onClick: () => {
                    onSetSection(menuItem.path);
                  },
                })}
                className={cn(
                  "flex items-center gap-2 rounded-xl px-4 py-2",
                  section == menuItem.path
                    ? "border-[#27272A] bg-[#09090B]"
                    : "",
                )}
                key={`menu-item-${menuItem.id}`}
              >
                {section == menuItem.path && menuItem.icon}
                {menuItem.label}
              </Link>
            ))}
          </CardContent>
        </Card>
      );
    case "mobile":
      return (
        <div className="mt-10 flex flex-col">
          {TEAMIFY_CONSTANTS.landingPageMenu.map((menuItem) => (
            <Link
              href={menuItem.path}
              key={`menu-mobile-${menuItem.id}`}
              {...(menuItem.section && {
                onClick: () => {
                  onSetSection(menuItem.path);
                },
              })}
              className={cn(
                "flex items-center gap-2 rounded-xl px-4 py-2",
                section == menuItem.path ? "bg-themeGray border-[#27272A]" : "",
              )}
            >
              {menuItem.icon}
              {menuItem.label}
            </Link>
          ))}
        </div>
      );
    default:
      return <div />;
  }
}

export default Menu;
