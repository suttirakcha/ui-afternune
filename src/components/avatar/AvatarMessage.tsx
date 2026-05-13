"use client";

import { Avatar, Box, HStack, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

interface AvatarMessageProps {
  image_url?: string;
  username: string;
  message: string;
  link?: string;
  isOnline?: boolean;
  lineClamp?: number;
}

export default function AvatarMessage({
  username,
  image_url,
  message,
  link,
  isOnline,
  lineClamp,
}: AvatarMessageProps) {
  const router = useRouter();
  return (
    <HStack
      onClick={() => {
        if (link) router.push(link);
      }}
      cursor={link ? "pointer" : "default"}
      gap={4}
    >
      <Stack position="relative">
        <Avatar.Root
          backgroundColor="var(--light-orange)"
          color="var(--secondary)"
          width={16}
          height={16}
        >
          <Avatar.Fallback name={username} />
          {image_url && <Avatar.Image src={image_url} />}
        </Avatar.Root>
        {isOnline && (
          <Box
            width={4}
            height={4}
            borderRadius="9999px"
            backgroundColor="#29E230"
            position="absolute"
            right={0}
            bottom={0}
            boxShadow="0 0 6px #29E230"
          />
        )}
      </Stack>
      <Stack gap={1} width={"calc(100% - 80px)"}>
        <Text color="var(--secondary)" fontSize="18px">
          {username}
        </Text>
        <Text fontWeight={600} lineClamp={lineClamp} textOverflow={"ellipsis"}>
          {message}
        </Text>
      </Stack>
    </HStack>
  );
}
