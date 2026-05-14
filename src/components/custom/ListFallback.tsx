"use client";

import { Text, TextProps } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

const LIST_FALLBACK_STYLES = {
  fontSize: "18px",
  textAlign: "center",
};

interface ListFallbackProps extends TextProps {
  text: string;
}

export function ListFallback({ text, ...props }: ListFallbackProps) {
  const t = useTranslations();
  return (
    <Text {...LIST_FALLBACK_STYLES} {...props}>
      {t(text)}
    </Text>
  );
}
