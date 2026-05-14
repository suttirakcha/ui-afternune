"use client";

import { Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

const LIST_FALLBACK_STYLES = {
  fontSize: "18px",
  textAlign: "center",
};

interface ListFallbackProps {
  text: string;
}

export function ListFallback({ text }: ListFallbackProps) {
  const t = useTranslations();
  return <Text {...LIST_FALLBACK_STYLES}>{t(text)}</Text>;
}
