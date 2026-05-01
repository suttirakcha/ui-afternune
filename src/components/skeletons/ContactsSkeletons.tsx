import AvatarUserSkeletons from "@/components/skeletons/AvatarUserSkeletons";
import { Skeleton, VStack } from "@chakra-ui/react";

export default function ContactsSkeletons() {
  return (
    <VStack gap={10} alignItems={"flex-start"}>
      <Skeleton width={"160px"} height={"48px"} />
      <VStack gap={5}>
        <AvatarUserSkeletons />
        <AvatarUserSkeletons />
        <AvatarUserSkeletons />
      </VStack>
    </VStack>
  );
}
