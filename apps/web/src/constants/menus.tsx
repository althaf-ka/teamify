import {
  AffiliateDuoToneBlack,
  Buisness,
  Chat,
  Courses,
  CreditCard,
  Document,
  Explore,
  GlobeDuoToneBlack,
  Home,
  IDuotoneBlack,
  PersonalDevelopment,
  ZapDouToneBlack,
} from "@repo/ui/icons/web";

export interface MenuProps {
  id: number;
  label: string;
  icon: JSX.Element;
  path: string;
  section?: boolean;
  integration?: boolean;
}

export const LANDING_PAGE_MENU: MenuProps[] = [
  {
    id: 0,
    label: "Home",
    icon: <Home key="home-icon" />,
    path: "/",
    section: true,
  },
  {
    id: 1,
    label: "Pricing",
    icon: <CreditCard key="credit-card-icon" />,
    path: "#pricing",
    section: true,
  },
  {
    id: 2,
    label: "Explore",
    icon: <Explore key="explore-icon" />,
    path: "/explore",
  },
];

export interface GroupMenuProps {
  id: number;
  label: string;
  icon: JSX.Element;
  path: string;
}

export const GROUP_PAGE_MENU: MenuProps[] = [
  {
    id: 0,
    label: "Group",
    icon: <Home key="home-icon" />,
    path: "/",
    section: true,
  },
  {
    id: 1,
    label: "Courses",
    icon: <Courses key="courses-icon" />,
    path: "#pricing",
    section: true,
  },
  {
    id: 2,
    label: "Events",
    icon: <Buisness key="events-icon" />,
    path: "/explore",
  },
  {
    id: 3,
    label: "Members",
    icon: <PersonalDevelopment key="members-icon" />,
    path: "/explore",
  },
  {
    id: 4,
    label: "About",
    icon: <Document key="about-icon" />,
    path: "/explore",
  },
  {
    id: 5,
    label: "Huddle",
    icon: <Chat key="huddle-icon" />,
    path: "/explore",
  },
];

export const SIDEBAR_SETTINGS_MENU: MenuProps[] = [
  {
    id: 0,
    label: "General",
    icon: <IDuotoneBlack key="general-icon" />,
    path: "",
  },
  {
    id: 1,
    label: "Subscriptions",
    icon: <CreditCard key="subscriptions-icon" />,
    path: "subscriptions",
  },
  {
    id: 2,
    label: "Affiliates",
    icon: <AffiliateDuoToneBlack key="affiliates-icon" />,
    path: "affiliates",
  },
  {
    id: 3,
    label: "Domain Config",
    icon: <GlobeDuoToneBlack key="domains-icon" />,
    path: "domains",
  },
  {
    id: 4,
    label: "Integration",
    icon: <ZapDouToneBlack key="integration-icon" />,
    path: "integrations",
    integration: true,
  },
];
