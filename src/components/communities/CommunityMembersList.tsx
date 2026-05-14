"use client";

import AvatarUser from "@/components/avatar/AvatarUser";
import AfnTitle from "@/components/custom/AfnTitle";
import { ListFallback } from "@/components/custom/ListFallback";
import { User } from "@/types/users.type";
import { For, Stack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

interface CommunityMembersListProps {
  creator: User;
  members: User[];
}

export default function CommunityMembersList({
  creator,
  members,
}: CommunityMembersListProps) {
  const t = useTranslations();
  return (
    <Stack gap={10}>
      <Stack gap={6}>
        <AfnTitle>{t("Creator")}</AfnTitle>
        <AvatarUser user={creator} />
      </Stack>
      <Stack gap={6}>
        <AfnTitle>{t("Members")}</AfnTitle>
        <Stack gap={5}>
          <For
            each={members}
            fallback={<ListFallback textAlign="left" text="No members yet" />}
          >
            {(member: User) => <AvatarUser key={member._id} user={member} />}
          </For>
        </Stack>
      </Stack>
    </Stack>
  );
}
