import {
  LuLogOut,
  LuMessageSquareText,
  LuPresentation,
  LuSearch,
} from "react-icons/lu";
import { Menu } from "@/types/menus.type";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { TbBuildingCommunity } from "react-icons/tb";

export enum SidebarMenu {
  SEARCH = "search",
  POSTS = "posts",
  COMMUNITIES = "communities",
  MESSAGES = "messages",
  SETTINGS = "settings",
}

export enum AdminSidebarMenu {
  DASHBOARD = "dashboard",
  USERS = "users",
  REPORTS = "reports",
  BACK_TO_MAINPAGE = "back-to-mainpage",
}

const getHref = (href: string) => `/${href}`;
const getAdminHref = (href: string) => `/admin/${href}`;

export const sidebarMenus: Menu[] = [
  {
    id: SidebarMenu.SEARCH,
    title: "Search",
    href: "/",
    icon: <LuSearch />,
  },
  {
    id: SidebarMenu.POSTS,
    title: "Posts",
    href: getHref(SidebarMenu.POSTS),
    icon: <HiOutlineClipboardDocumentList />,
  },
  {
    id: SidebarMenu.COMMUNITIES,
    title: "Communities",
    href: getHref(SidebarMenu.COMMUNITIES),
    icon: <TbBuildingCommunity />,
  },
  {
    id: SidebarMenu.MESSAGES,
    title: "Messages",
    href: getHref(SidebarMenu.MESSAGES),
    icon: <LuMessageSquareText />,
  },
];

export const adminSidebarMenus: Menu[] = [
  {
    id: AdminSidebarMenu.DASHBOARD,
    title: "Dashboard",
    href: getAdminHref(AdminSidebarMenu.DASHBOARD),
    icon: <LuPresentation />,
  },
  // {
  //   id: AdminSidebarMenu.USERS,
  //   title: 'Users',
  //   href: getAdminHref(AdminSidebarMenu.USERS),
  //   icon: <LuSearch />,
  // },
  {
    id: AdminSidebarMenu.REPORTS,
    title: "Reports",
    href: getAdminHref(AdminSidebarMenu.REPORTS),
    icon: <HiOutlineClipboardDocumentList />,
  },
  {
    id: AdminSidebarMenu.BACK_TO_MAINPAGE,
    title: "Back to Mainpage",
    href: "/",
    icon: <LuLogOut />,
  },
];
