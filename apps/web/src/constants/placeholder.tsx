import {
  Chat,
  Courses,
  Document,
  Grid,
  Heart,
  MegaPhone,
  WhiteLabel,
} from "@repo/ui/icons/web";

export interface CreateGroupPlaceholderProps {
  id: string;
  label: string;
  icon: JSX.Element;
}

export const CREATE_GROUP_PLACEHOLDER: CreateGroupPlaceholderProps[] = [
  {
    id: "0",
    label: "Highly engaging",
    icon: <MegaPhone key="megaphone-icon" />,
  },
  {
    id: "1",
    label: "Easy to setup",
    icon: <Heart key="heart-icon" />,
  },
  {
    id: "2",
    label: "Group chat and posts",
    icon: <Chat key="chat-icon" />,
  },
  {
    id: "3",
    label: "Students can create teams within Groups",
    icon: <Grid key="grid-icon" />,
  },
  {
    id: "4",
    label: "Gamification",
    icon: <Document key="document-icon" />,
  },
  {
    id: "5",
    label: "Host unlimited courses",
    icon: <Courses key="courses-icon" />,
  },
  {
    id: "6",
    label: "White-labeling options",
    icon: <WhiteLabel key="white-label-icon" />,
  },
];
