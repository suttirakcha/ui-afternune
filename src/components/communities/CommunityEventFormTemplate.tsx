"use client";

import AfnTitle from "@/components/custom/AfnTitle";
import LinkBackBtn from "@/components/custom/LinkBackBtn";
import MainContainer from "@/components/custom/MainContainer";
import CommunityEventForm from "@/components/forms/CommunityEventForm";
import { Community, CommunityEvent } from "@/types/communities.type";
import { Stack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

interface CommunityEventFormTemplateProps {
  community: Community;
  communityEvent?: CommunityEvent;
}

export default function CommunityEventFormTemplate({
  community,
  communityEvent,
}: CommunityEventFormTemplateProps) {
  const t = useTranslations();
  return (
    <MainContainer animated>
      <Stack maxWidth={600} width="full" marginX="auto" gap={10}>
        <LinkBackBtn href={`/communities/${community._id}`}>
          {t("Back to community")}
        </LinkBackBtn>
        <AfnTitle>
          {t(
            communityEvent ? "Update community event" : "Create community event"
          )}
        </AfnTitle>
        <CommunityEventForm
          community={community}
          communityEvent={communityEvent}
        />
      </Stack>
    </MainContainer>
  );
}
