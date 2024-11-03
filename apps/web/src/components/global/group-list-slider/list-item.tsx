"use client";

import { cn } from "@/lib/utils";

interface GroupListItemProps {
  icon: JSX.Element;
  label: string;
  selected?: string;
  path?: string;
}

export const GroupListItem = ({
  icon,
  label,
  selected,
  path,
}: GroupListItemProps) => {
  return (
    <div
      className={cn(
        "bg-themeGray flex cursor-pointer items-center gap-3 rounded-2xl border-2 px-4 py-2",
        selected === path ? "border-themeTextGray" : "border-themeGray",
      )}
    >
      {icon}
      {label}
    </div>
  );
};
