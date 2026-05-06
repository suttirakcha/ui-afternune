"use client";

import AfnBadge from "@/components/custom/AfnBadge";
import AfnTitle from "@/components/custom/AfnTitle";
import { For, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";

interface InterestBadgesProps {
  interests: string[];
}

export default function InterestBadges({
  interests = [],
}: InterestBadgesProps) {
  return (
    <Stack gap={4}>
      <AfnTitle>Interests</AfnTitle>
      <HStack flexWrap="wrap">
        <For each={interests} fallback={<Text>No interests...</Text>}>
          {(interest: string) => <AfnBadge key={interest}>{interest}</AfnBadge>}
        </For>
      </HStack>
    </Stack>
  );
}
