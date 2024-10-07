import type { MenuProps } from "./menus";
import { LANDING_PAGE_MENU } from "./menus";

interface TeamifyConstantsProps {
  landingPageMenu: MenuProps[];
  // signUpForm: AuthFormProps[];
  // signInForm: AuthFormProps[];
  // groupList: GroupListProps[];
  // createGroupPlaceholder: CreateGroupPlaceholderProps[];
  // groupPageMenu: GroupMenuProps[];
}

export const TEAMIFY_CONSTANTS: TeamifyConstantsProps = {
  landingPageMenu: LANDING_PAGE_MENU,
  // signUpForm: SIGN_UP_FORM,
  // signInForm: SIGN_IN_FORM,
  // groupList: GROUP_LIST,
  // createGroupPlaceholder: CREATE_GROUP_PLACEHOLDER,
  // groupPageMenu: GROUP_PAGE_MENU,
};
