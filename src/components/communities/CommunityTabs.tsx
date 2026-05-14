"use client";

import AfnTitle from "@/components/custom/AfnTitle";
import { ListFallback } from "@/components/custom/ListFallback";
import { CommunityEvent } from "@/types/communities.type";
import { formatDate } from "@/utils/calculate-time";
import { For, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

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
        <Stack gap={6}>
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
                gap={6}
              >
                <Stack gap={4}>
                  {community_event.image_url && (
                    <Image
                      src={community_event.image_url}
                      alt={community_event.event_name}
                      width={768}
                      height={768}
                      style={{
                        borderRadius: "16px",
                      }}
                    />
                  )}
                  <AfnTitle>{community_event.event_name}</AfnTitle>
                  <Text fontSize="18px" fontWeight={600}>
                    {community_event.event_detail}
                  </Text>
                </Stack>

                <Grid gridTemplateColumns="repeat(2, 1fr)">
                  <GridItem>
                    <AfnTitle size={"small"}>{t("Start date")}</AfnTitle>
                    <Text fontWeight={500}>
                      {formatDate(community_event.start_date)}
                    </Text>
                  </GridItem>
                  <GridItem>
                    <AfnTitle size={"small"}>{t("End date")}</AfnTitle>
                    <Text fontWeight={500}>
                      {formatDate(community_event.end_date)}
                    </Text>
                  </GridItem>
                </Grid>
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
