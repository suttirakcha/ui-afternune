"use client";

import { Community } from "@/types/communities.type";
import { Avatar, Box, HStack, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

type AvatarUserProps = {
  community: Pick<Community, "title" | "image_url">;
  isOnline?: boolean;
  link?: string;
};

export default function AvatarCommunity(props: AvatarUserProps) {
  const router = useRouter();
  const { community, link } = props;
  return (
    <HStack
      onClick={() => {
        if (link) return router.push(link);
      }}
      cursor={"pointer"}
      gap={"16px"}
    >
      <Stack position={"relative"}>
        <Avatar.Root
          backgroundColor={"var(--light-orange)"}
          color={"var(--secondary)"}
          width={"64px"}
          height={"64px"}
        >
          <Avatar.Fallback name={community?.title ?? "Community"} />
          {community?.image_url && <Avatar.Image src={community.image_url} />}
        </Avatar.Root>
      </Stack>
      <Text color={"var(--secondary)"} fontSize={"20px"} fontWeight={600}>
        {community?.title}
      </Text>
    </HStack>
  );
}
