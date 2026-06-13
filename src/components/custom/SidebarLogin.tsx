"use client";

import AvatarUser from "@/components/avatar/AvatarUser";
import AfnBadge from "@/components/custom/AfnBadge";
import AfnButton from "@/components/custom/AfnButton";
import AfnMenu from "@/components/custom/AfnMenu";
import { Option } from "@/types/menus.type";
import { User } from "@/types/users.type";
import { Stack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

interface SidebarLoginProps {
  profile: User | null;
  options: Option[];
}

export default function SidebarLogin({ profile, options }: SidebarLoginProps) {
  const t = useTranslations();
  const router = useRouter();
  if (!profile) {
    return (
      <AfnButton onClick={() => router.push("/login")}>{t("Login")}</AfnButton>
    );
  }

  return (
    <AfnMenu
      trigger={
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <AvatarUser user={profile} notification={2} />
        </Stack>
      }
      options={options}
    />
  );
}
