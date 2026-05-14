"use client";

import AvatarCommunity from "@/components/avatar/AvatarCommunity";
import AfnTitle from "@/components/custom/AfnTitle";
import { Community } from "@/types/communities.type";
import { User } from "@/types/users.type";
import { For, Stack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

interface JoinedCommunityListProps {
  profile: User;
}

export default function JoinedCommunityList({
  profile,
}: JoinedCommunityListProps) {
  const t = useTranslations();
  return (
    <Stack position="sticky" top={10} gap={10}>
      <AfnTitle>{t("Joined")}</AfnTitle>
      <Stack gap={6}>
        {profile ? (
          <For
            each={profile.joined_communities}
            fallback={<Text>{t("You have not joined any communities")}</Text>}
          >
            {(community: Community) => (
              <AvatarCommunity
                key={community?._id}
                community={community}
                link={`/communities/${community?._id}`}
              />
            )}
          </For>
        ) : (
          <Text>{t("Please login to see the joined communities")}</Text>
        )}
      </Stack>
    </Stack>
  );
}
