import type { AuthFormProps } from "./forms";
import { SIGN_IN_FORM, SIGN_UP_FORM } from "./forms";
import type { GroupMenuProps, MenuProps } from "./menus";
import { GROUP_PAGE_MENU, LANDING_PAGE_MENU } from "./menus";
import {
  CREATE_GROUP_PLACEHOLDER,
  CreateGroupPlaceholderProps,
} from "./placeholder";
import { GROUP_LIST, GroupListProps } from "./slider";

interface TeamifyConstantsProps {
  landingPageMenu: MenuProps[];
  signUpForm: AuthFormProps[];
  signInForm: AuthFormProps[];
  groupList: GroupListProps[];
  createGroupPlaceholder: CreateGroupPlaceholderProps[];
  groupPageMenu: GroupMenuProps[];
}

export const TEAMIFY_CONSTANTS: TeamifyConstantsProps = {
  landingPageMenu: LANDING_PAGE_MENU,
  signUpForm: SIGN_UP_FORM,
  signInForm: SIGN_IN_FORM,
  groupList: GROUP_LIST,
  createGroupPlaceholder: CREATE_GROUP_PLACEHOLDER,
  groupPageMenu: GROUP_PAGE_MENU,
};
