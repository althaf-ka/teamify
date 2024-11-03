import { RefreshCcw, FolderOpen } from "lucide-react";
import {
  Buisness,
  Fitness,
  LifeStyle,
  PersonalDevelopment,
  SocialMedia,
  Tech,
} from "@repo/ui/icons/web";

export interface GroupListProps {
  id: string;
  label: string;
  icon: JSX.Element;
  path: string;
}

export const GROUP_LIST: GroupListProps[] = [
  {
    id: "0",
    label: "All",
    icon: <RefreshCcw key="all-icon" />,
    path: "",
  },
  {
    id: "1",
    label: "Fitness",
    icon: <Fitness key="fitness-icon" />,
    path: "fitness",
  },
  {
    id: "2",
    label: "Tech",
    icon: <Tech key="tech-icon" />,
    path: "tech",
  },
  {
    id: "3",
    label: "Business",
    icon: <Buisness key="business-icon" />,
    path: "business",
  },
  {
    id: "4",
    label: "Lifestyle",
    icon: <LifeStyle key="lifestyle-icon" />,
    path: "lifestyle",
  },
  {
    id: "5",
    label: "Personal Development",
    icon: <PersonalDevelopment key="personal-development-icon" />,
    path: "personal-development",
  },
  {
    id: "6",
    label: "Social Media",
    icon: <SocialMedia key="social-media-icon" />,
    path: "social-media",
  },
  {
    id: "7",
    label: "Other",
    icon: <FolderOpen key="music-icon" size="16px" />,
    path: "other",
  },
];
