"use client";

import AfnBadge from "@/components/custom/AfnBadge";
import AfnTitle from "@/components/custom/AfnTitle";
import { For, HStack, Stack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

interface InterestBadgesProps {
  interests: string[];
}

export default function InterestBadges({
  interests = [],
}: InterestBadgesProps) {
  const t = useTranslations();
  return (
    <Stack gap={4}>
      <AfnTitle>{t("Interests")}</AfnTitle>
      <HStack flexWrap="wrap">
        <For each={interests} fallback={<Text>{t("No interests")}</Text>}>
          {(interest: string) => (
            <AfnBadge key={interest}>{t(interest)}</AfnBadge>
          )}
        </For>
      </HStack>
    </Stack>
  );
}
