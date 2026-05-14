import AvatarUserSkeletons from "@/components/skeletons/AvatarUserSkeletons";
import { HStack, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

export default function PostSkeletons() {
  return (
    <Stack gap="6" width={"full"}>
      <Skeleton height={"552px"} width={"full"} borderRadius={"16px"} />
      <AvatarUserSkeletons />
      <HStack justifyContent={"space-between"}>
        <Skeleton width={"120px"} height={"30px"} />
        <Skeleton width={"80px"} height={"30px"} />
      </HStack>
      <Stack gap={3}>
        <SkeletonText noOfLines={1} width={"200px"} height={"30px"} />
        <SkeletonText noOfLines={2} width={"480px"} />
      </Stack>
    </Stack>
  );
}
