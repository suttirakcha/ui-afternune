"use client";

import AfnTitle from "@/components/custom/AfnTitle";
import Logo from "@/components/custom/Logo";
import MenuLinks from "@/components/custom/MenuLinks";
import { adminSidebarMenus } from "@/menus/sidebarMenus";
import { Stack, VStack } from "@chakra-ui/react";

export default function AdminSidebar() {
  const SIDEBAR_STYLES = {
    position: "fixed",
    px: 8,
    py: 6,
    w: "var(--sidebar-width)",
    zIndex: 2,
    minH: "100dvh",
    boxShadow: "var(--main-box-shadow)",
    flexDirection: "column",
    justifyContent: "space-between",
  };
  return (
    <Stack {...SIDEBAR_STYLES}>
      <Stack gap={10}>
        <VStack>
          <Logo />
          <AfnTitle size={"small"}>Administration</AfnTitle>
        </VStack>

        <Stack gap={"30px"} flexDirection={"column"}>
          <MenuLinks menus={adminSidebarMenus} />
        </Stack>
      </Stack>
    </Stack>
  );
}
