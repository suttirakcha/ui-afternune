"use client";

import AfnTitle from "@/components/custom/AfnTitle";
import LinkBackBtn from "@/components/custom/LinkBackBtn";
import MainContainer from "@/components/custom/MainContainer";
import CommunityForm from "@/components/forms/CommunityForm";
import { Community } from "@/types/communities.type";
import { Stack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

interface CommunityFormTemplateProps {
  community?: Community;
}

export default function CommunityFormTemplate({
  community,
}: CommunityFormTemplateProps) {
  const t = useTranslations();
  return (
    <MainContainer animated>
      <Stack maxWidth={600} width="full" marginX="auto" gap={10}>
        <LinkBackBtn href="/communities">
          {t("Back to communities")}
        </LinkBackBtn>
        <AfnTitle>
          {t(community ? "Update community" : "Create community")}
        </AfnTitle>
        <CommunityForm community={community} />
      </Stack>
    </MainContainer>
  );
}
