"use client";

import { sidebarMenus } from "@/menus/sidebarMenus";
import { Stack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function MobileNavbar() {
  const t = useTranslations();
  const mobileNavbarStyles = {
    position: "fixed",
    bottom: 0,
    insetX: 0,
    boxShadow: "var(--main-box-shadow)",
    px: 6,
    py: 3,
    backgroundColor: "white",
  };

  return (
    <Stack {...mobileNavbarStyles}>
      <Stack display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2}>
        {sidebarMenus.map((menu) => {
          return (
            <Link href={menu.href} key={menu.id} className="mobile-menu-link">
              {menu.icon}
              {t(menu.title)}
            </Link>
          );
        })}
      </Stack>
    </Stack>
  );
}
