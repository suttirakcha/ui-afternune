import { Skeleton, Stack } from "@chakra-ui/react";

export default function SettingsSkeletons() {
  return (
    <Stack gap={10} width={"full"}>
      <Skeleton width={"120px"} height={"40px"} />
      <Stack gap={6} width={"full"}>
        <Skeleton width={"full"} height={"40px"} />
        <Skeleton width={"full"} height={"40px"} />
        <Skeleton width={"full"} height={"120px"} />
      </Stack>
    </Stack>
  );
}
