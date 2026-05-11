import AfnTitle from "@/components/custom/AfnTitle";
import { settingsMenus } from "@/menus/settingsMenus";
import { Menu } from "@/types/menus.type";
import { Stack } from "@chakra-ui/react";
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

  const Component = currentMenu.component;

  return (
    <Stack gap={6}>
      <AfnTitle size={"small"}>{currentMenu.title}</AfnTitle>
      {Component && <Component />}
    </Stack>
  );
}
