"use client";

import { User } from "@/types/users.type";
import { Avatar, Box, HStack, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

type AvatarUserProps = {
  user: Pick<User, "username" | "image_url">;
  isOnline?: boolean;
  link?: string;
  notification?: number;
};

export default function AvatarUser(props: AvatarUserProps) {
  const router = useRouter();
  const { user, link, isOnline, notification } = props;
  return (
    <HStack
      onClick={() => {
        if (link) return router.push(link);
      }}
      cursor={"pointer"}
      gap={"16px"}
    >
      <Stack position={"relative"}>
        {notification && (
          <Stack
            backgroundColor="var(--primary)"
            color="white"
            width="24px"
            height="24px"
            position="absolute"
            right={-1}
            top={-1}
            boxShadow="var(--main-box-shadow)"
            borderRadius="9999px"
            zIndex={9}
            alignItems="center"
            justifyContent="center"
            fontWeight={600}
            fontSize="16px"
          >
            {notification}
          </Stack>
        )}
        <Avatar.Root
          backgroundColor={"var(--light-orange)"}
          color={"var(--secondary)"}
          width={"64px"}
          height={"64px"}
        >
          <Avatar.Fallback name={user?.username ?? "Guest"} />
          {user?.image_url && <Avatar.Image src={user.image_url} />}
        </Avatar.Root>
        {isOnline && (
          <Box
            width={"12px"}
            height={"12px"}
            borderRadius={"9999px"}
            backgroundColor={"#29E230"}
            position={"absolute"}
            right={1}
            bottom={1}
            boxShadow={"0 0 6px #29E230"}
          />
        )}
      </Stack>
      <Text color={"var(--secondary)"} fontSize={"20px"} fontWeight={600}>
        {user?.username}
      </Text>
    </HStack>
  );
}
