"use client";

import { Skeleton, Stack, Text } from "@chakra-ui/react";
import { sidebarMenus } from "@/menus/sidebarMenus";
import Logo from "@/components/custom/Logo";
import MenuLinks from "@/components/custom/MenuLinks";
import { useCallback, useEffect, useState } from "react";
import { getProfile, logout } from "@/services/auth.service";
import { User } from "@/types/users.type";
import { useRouter } from "next/navigation";
import { Option } from "@/types/menus.type";
import { LuLogOut, LuSettings, LuUser } from "react-icons/lu";
import { handleMessage } from "@/utils/handle-message";
import SidebarLogin from "@/components/custom/SidebarLogin";
import { settingsMenus } from "@/menus/settingsMenus";
import { useTranslations } from "next-intl";
import LanguageSwitcherSelect from "@/components/custom/LanguageSwitcherSelect";

interface SidebarProps {
  locale: string;
}

export default function Sidebar({ locale }: SidebarProps) {
  const t = useTranslations();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState<User | null>(null);
  const currentYear = new Date().getFullYear();

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
    backgroundColor: "white",
    // display: "none",
    display: "flex",
    lg: {
      display: "flex",
    },
  };

  const handleLogout = useCallback(async () => {
    const response = await logout();
    if (!response.success) {
      handleMessage(t(response.message));
      return;
    }
    handleMessage(t(response.message));
    setProfile(null);
    router.push("/");
  }, []);

  const handleFetchProfile = useCallback(async () => {
    try {
      const user = await getProfile();
      setProfile(user);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const profileOptions: Option[] = [
    {
      menu: "View profile",
      onSelect: () => router.push(`/profile/${profile?._id}`),
      icon: <LuUser />,
    },
    {
      menu: "Settings",
      onSelect: () => router.push(settingsMenus[0].href),
      icon: <LuSettings />,
    },
    {
      menu: "Logout",
      onSelect: handleLogout,
      icon: <LuLogOut />,
    },
  ];

  useEffect(() => {
    handleFetchProfile();
  }, []);

  return (
    <Stack {...SIDEBAR_STYLES}>
      <Stack gap={"60px"} flexDirection={"column"}>
        <Logo />
        <Stack gap={"30px"} flexDirection={"column"}>
          <MenuLinks menus={sidebarMenus} animated />
          <LanguageSwitcherSelect defaultLocale={locale} />
        </Stack>
      </Stack>
      <Stack gap={"20px"}>
        {isLoading ? (
          <Skeleton height={10} width={"full"} />
        ) : (
          <SidebarLogin profile={profile} options={profileOptions} />
        )}
        <Text color="var(--secondary)">&copy; {currentYear} Afternune</Text>
      </Stack>
    </Stack>
  );
}
