import { HStack, Skeleton } from "@chakra-ui/react";

export default function AvatarUserSkeletons() {
  return (
    <HStack gap={"16px"} alignItems={"center"}>
      <Skeleton width={16} height={16} borderRadius={"9999px"} />
      <Skeleton width={"120px"} height={"30px"} />
    </HStack>
  );
}
