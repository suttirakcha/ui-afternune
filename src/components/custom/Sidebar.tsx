"use client";

import { Stack, Text } from "@chakra-ui/react";
import { sidebarMenus } from "@/menus/sidebarMenus";
import Logo from "@/components/custom/Logo";
import MenuLinks from "@/components/custom/MenuLinks";
import AfnButton from "@/components/custom/AfnButton";
import AuthDialog from "@/components/dialogs/AuthDialog";
import { useState } from "react";

export default function Sidebar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const sidebarStyles = {
    position: "fixed",
    px: 8,
    py: 6,
    w: "var(--sidebar-width)",
    zIndex: 2,
    minH: "100dvh",
    boxShadow: "var(--main-box-shadow)",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "white",
    display: "none",
    lg: {
      display: "flex",
    },
  };

  return (
    <Stack {...sidebarStyles}>
      <Stack gap={"60px"} flexDirection={"column"}>
        <Logo />
        <Stack gap={"30px"} flexDirection={"column"}>
          <MenuLinks menus={sidebarMenus} animated />
        </Stack>
      </Stack>
      <Stack gap={"20px"}>
        <AfnButton onClick={() => setIsLoginModalOpen(true)}>Login</AfnButton>
        <Text color="var(--secondary)">&copy; {currentYear} Afternune</Text>
      </Stack>

      <AuthDialog
        open={isLoginModalOpen}
        onOpenChange={(value) => setIsLoginModalOpen(value.open)}
      />
    </Stack>
  );
}
