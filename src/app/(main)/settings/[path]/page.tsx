import SettingsComp from "@/components/settings/SettingsComp";
import { settingsMenus } from "@/menus/settingsMenus";
import { Menu } from "@/types/menus.type";
import { notFound } from "next/navigation";

interface SettingsPageParams {
  params: Promise<{ path: string }>;
}

export default async function SettingsPage({ params }: SettingsPageParams) {
  const { path } = await params;
  const currentMenu: Menu = settingsMenus.find((menu) => menu.id === path)!;
  if (!currentMenu) {
    return notFound();
  }

  return <SettingsComp menu={currentMenu} />;
}
