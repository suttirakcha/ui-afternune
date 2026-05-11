import {
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

export default function CommunityDetailSkeletons() {
  return (
    <Stack gap={10} width={"full"}>
      <Skeleton width={"120px"} height={"40px"} />
      <HStack gap={"40px"}>
        <SkeletonCircle size={"256px"} />
        <Stack gap={10} width={"full"}>
          <HStack gap={"60px"}>
            <Stack gap={4}>
              <Skeleton height={"50px"} width={"80px"} />
              <Skeleton height={"40px"} width={"120px"} />
            </Stack>
          </HStack>

          <SkeletonText noOfLines={2} height={"24px"} />
        </Stack>
      </HStack>
    </Stack>
  );
}
