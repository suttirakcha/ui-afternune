"use client";

import AfnTitle from "@/components/custom/AfnTitle";
import { CommunityEvent } from "@/types/communities.type";
import { For, Stack, Text } from "@chakra-ui/react";

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
  return (
    <Stack>
      {isJoined || isCreator ? (
        <Stack>
          <AfnTitle size="medium">Events</AfnTitle>
          <For
            each={events}
            fallback={
              <Text>
                Looks like there are no upcoming events in this community.
                Please wait for a moment or ask the community creator to create
                events.
              </Text>
            }
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
        <Text fontSize={"18px"} textAlign={"center"}>
          Please join this community to see the details
        </Text>
      )}
    </Stack>
  );
}
