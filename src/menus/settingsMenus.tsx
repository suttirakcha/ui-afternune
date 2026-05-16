import BlockedUserSettings from "@/components/settings/BlockedUserSettings";
import EditProfileSettings from "@/components/settings/EditProfileSettings";
import ManageInterestsSettings from "@/components/settings/ManageInterestsSettings";
import { Menu } from "@/types/menus.type";
import { LuBan, LuBookHeart, LuLock, LuPalette, LuUser } from "react-icons/lu";
// import EditProfileSettings from "../components/settings/EditProfileSettings";
// import PrivacySettings from "../components/settings/PrivacySettings";
// import BlockedUsersSettings from "../components/settings/BlockedUsersSettings";

const ROOT_PATH = "/settings";

export enum SettingsMenu {
  PROFILE = "profile",
  MANAGE_INTERESTS = "manage-interests",
  PRIVACY = "privacy",
  THEMES = "themes",
  BLOCKED = "blocked",
}

const getHref = (href: string) => `${ROOT_PATH}/${href}`;

export const settingsMenus: Menu[] = [
  {
    id: SettingsMenu.PROFILE,
    title: "Edit profile",
    href: getHref(SettingsMenu.PROFILE),
    icon: <LuUser />,
    component: <EditProfileSettings />,
  },
  {
    id: SettingsMenu.MANAGE_INTERESTS,
    title: "Manage interests",
    href: getHref(SettingsMenu.MANAGE_INTERESTS),
    description:
      "Your interests will be used for any post and community suggestions",
    icon: <LuBookHeart />,
    component: <ManageInterestsSettings />,
  },
  // {
  //   id: SettingsMenu.PRIVACY,
  //   title: "Privacy",
  //   href: getHref(SettingsMenu.PRIVACY),
  //   icon: <LuLock />,
  //   component: <PrivacySettings />,
  // },
  // {
  //   id: SettingsMenu.THEMES,
  //   title: 'Themes',
  //   href: getHref(SettingsMenu.THEMES),
  //   icon: <LuPalette />,
  // },
  {
    id: SettingsMenu.BLOCKED,
    title: "Blocked users",
    description: "You can manage blocked users here",
    href: getHref(SettingsMenu.BLOCKED),
    icon: <LuBan />,
    component: <BlockedUserSettings />,
  },
];
