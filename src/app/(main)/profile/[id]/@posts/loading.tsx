import PostSkeletons from "@/components/skeletons/PostSkeletons";
import { Stack } from "@chakra-ui/react";

export default function ProfilePostLoading() {
  return (
    <Stack gap={6}>
      {Array.from({ length: 2 }).map((_, index) => (
        <PostSkeletons key={index} />
      ))}
    </Stack>
  );
}
