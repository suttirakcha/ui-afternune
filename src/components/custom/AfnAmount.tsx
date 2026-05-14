"use client";

import { formatAmount } from "@/utils/format-amount";
import { Text, VStack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

interface AfnAmountProps {
  amount: number;
  title: string;
}

export default function AfnAmount({ amount, title }: AfnAmountProps) {
  const t = useTranslations();
  return (
    <VStack alignItems="flex-start" gap={0}>
      <Text fontSize="60px" fontWeight={600}>
        {formatAmount(amount)}
      </Text>
      <Text fontSize="24px" fontWeight={500}>
        {t(title)}
      </Text>
    </VStack>
  );
}
