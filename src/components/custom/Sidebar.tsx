"use client";

import { Skeleton, Stack, Text } from "@chakra-ui/react";
import { sidebarMenus } from "@/menus/sidebarMenus";
import Logo from "@/components/custom/Logo";
import MenuLinks from "@/components/custom/MenuLinks";
import AuthDialog from "@/components/dialogs/AuthDialog";
import { useCallback, useEffect, useState } from "react";
import { getProfile, logout } from "@/services/auth.service";
import { User } from "@/types/users.type";
import { useRouter } from "next/navigation";
import { Option } from "@/types/menus.type";
import { LuLogOut, LuSettings, LuUser } from "react-icons/lu";
import { toaster } from "@/components/ui/toaster";
import { handleError } from "@/utils/handle-error";
import SidebarLogin from "@/components/custom/SidebarLogin";

export default function Sidebar() {
  const router = useRouter();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState<User | null>(null);
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
    // display: "none",
    display: "flex",
    lg: {
      display: "flex",
    },
  };

  const handleLogout = useCallback(async () => {
    try {
      const response = await logout();
      toaster.create({
        description: response.message,
      });
      setProfile(null);
    } catch (error) {
      handleError(error);
    }
  }, [profile]);

  const handleFetchProfile = useCallback(async () => {
    try {
      const user = await getProfile();
      setProfile(user);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  }, [profile]);

  const profileOptions: Option[] = [
    {
      menu: "View profile",
      onSelect: () => router.push(`/profile/${profile?._id}`),
      icon: <LuUser />,
    },
    // {
    //   menu: "Settings",
    //   onSelect: () => router.push(settingsMenus[0].href),
    //   icon: <LuSettings />,
    // },
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
    <Stack {...sidebarStyles}>
      <Stack gap={"60px"} flexDirection={"column"}>
        <Logo />
        <Stack gap={"30px"} flexDirection={"column"}>
          <MenuLinks menus={sidebarMenus} animated />
        </Stack>
      </Stack>
      <Stack gap={"20px"}>
        {isLoading ? (
          <Skeleton height={10} width={"full"} />
        ) : (
          <SidebarLogin
            profile={profile}
            options={profileOptions}
            onLoginModal={setIsLoginModalOpen}
          />
        )}
        <Text color="var(--secondary)">&copy; {currentYear} Afternune</Text>
      </Stack>

      <AuthDialog
        open={isLoginModalOpen}
        onOpenChange={(value) => setIsLoginModalOpen(value.open)}
      />
    </Stack>
  );
}
