"use client";

import AfnTitle from "@/components/custom/AfnTitle";
import { ListFallback } from "@/components/custom/ListFallback";
import { CommunityEvent } from "@/types/communities.type";
import { For, Stack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

interface CommunityTabsProps {
  isJoined: boolean;
  isCreator: boolean;
  events: CommunityEvent[];
}

export default function CommunityTabs({
  events,
  isJoined,
  isCreator,
}: CommunityTabsProps) {
  const t = useTranslations();
  return (
    <Stack>
      {isJoined || isCreator ? (
        <Stack>
          <AfnTitle size="medium">{t("Events")}</AfnTitle>
          <For
            each={events}
            fallback={<ListFallback text="No upcoming events" />}
          >
            {(community_event) => (
              <Stack
                key={community_event._id}
                border={"2px solid var(--light-orange-2)"}
                borderRadius={"16px"}
                px={6}
                py={4}
              >
                <AfnTitle size={"small"}>{community_event.event_name}</AfnTitle>
                <Text>{community_event.event_detail}</Text>
              </Stack>
            )}
          </For>
        </Stack>
      ) : (
        <ListFallback text="Please join this community to see the details" />
      )}
    </Stack>
  );
}
