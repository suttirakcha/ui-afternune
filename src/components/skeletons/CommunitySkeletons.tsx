import { Skeleton, Stack } from "@chakra-ui/react";

export default function CommunitySkeletons() {
  return (
    <Stack gap={10} width={"full"}>
      <Skeleton width={"200px"} height={"40px"} />
      <Stack gap={4}>
        <Skeleton height={"240px"} width={"full"} borderRadius={"16px"} />
        <Skeleton height={"240px"} width={"full"} borderRadius={"16px"} />
      </Stack>
    </Stack>
  );
}
