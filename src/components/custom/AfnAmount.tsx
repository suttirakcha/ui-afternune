import { formatAmount } from "@/utils/format-amount";
import { Text, VStack } from "@chakra-ui/react";

interface AfnAmountProps {
  amount: number;
  title: string;
}

export default function AfnAmount({ amount, title }: AfnAmountProps) {
  return (
    <VStack alignItems="flex-start" gap={0}>
      <Text fontSize="60px" fontWeight={600}>
        {formatAmount(amount)}
      </Text>
      <Text fontSize="24px" fontWeight={500}>
        {title}
      </Text>
    </VStack>
  );
}
