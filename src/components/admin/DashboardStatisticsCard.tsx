"use client";

import AfnTitle from "@/components/custom/AfnTitle";
import { formatAmount } from "@/utils/format-amount";
import { Box, Text } from "@chakra-ui/react";

interface DashboardStatisticsCardProps {
  count: number;
  title: string;
}

export default function DashboardStatisticsCard({
  count,
  title,
}: DashboardStatisticsCardProps) {
  return (
    <Box boxShadow={"var(--main-box-shadow)"} borderRadius={"16px"} p={6}>
      <AfnTitle size={"small"}>{title}</AfnTitle>
      <Text fontSize={"48px"} fontWeight={600}>
        {formatAmount(count ?? 0)}
      </Text>
    </Box>
  );
}
