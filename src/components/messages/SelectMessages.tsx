"use client";

import { Stack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

export default function SelectMessages() {
  const t = useTranslations();
  return (
    <Stack alignItems="center" justifyContent="center" height="100dvh">
      <Text fontSize={"18px"} fontWeight={600}>
        {t("Please select the conversation")}
      </Text>
    </Stack>
  );
}
