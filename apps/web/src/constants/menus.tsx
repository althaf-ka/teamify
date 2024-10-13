import { CreditCard, Explore, Home } from "@repo/ui/icons/web";

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
