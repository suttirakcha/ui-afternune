"use client";

import MenuLinks from "@/components/custom/MenuLinks";
import { settingsMenus } from "@/menus/settingsMenus";
import { Stack } from "@chakra-ui/react";

export default function SettingsSidebarPage() {
  return (
    <Stack
      boxShadow={"var(--main-box-shadow)"}
      p={6}
      borderRadius={"16px"}
      gap={6}
    >
      <MenuLinks menus={settingsMenus} />
    </Stack>
  );
}
