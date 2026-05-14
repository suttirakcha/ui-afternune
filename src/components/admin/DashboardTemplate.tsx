"use client";

import DashboardStatistics from "@/components/admin/DashboardStatistics";
import AfnTitle from "@/components/custom/AfnTitle";
import { Community } from "@/types/communities.type";
import { Post } from "@/types/posts.type";
import { User } from "@/types/users.type";
import { Stack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

interface DashboardTemplateProps {
  users: User[];
  posts: Post[];
  communities: Community[];
}

export default function DashboardTemplate({
  users,
  posts,
  communities,
}: DashboardTemplateProps) {
  const t = useTranslations();
  return (
    <Stack gap={10}>
      <AfnTitle>{t("Dashboard")}</AfnTitle>
      <DashboardStatistics
        users={users}
        posts={posts}
        communities={communities}
      />
    </Stack>
  );
}
