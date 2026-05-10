"use client";

import { User } from "@/types/users.type";
import { calculateTime } from "@/utils/calculate-time";
import { Avatar, Box, HStack, Stack, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import React from "react";

interface AvatarChatProps {
  message: string;
  isSender: boolean;
  user: User;
  createdAt: string;
}

export default function AvatarChat({
  message,
  isSender,
  user,
  createdAt,
}: AvatarChatProps) {
  const chatAnim = keyframes`
    0% {
      transform: scale(0.5);
      opacity: 0;
      transform-origin: ${isSender ? "top left" : "top right"}
    }
    100% {
      transform: scale(1);
      opacity: 1;
      transform-origin: ${isSender ? "top left" : "top right"}
    }
  `;

  const BOX_MESSAGE_STYLES = {
    color: isSender ? "var(--primary)" : "white",
    backgroundColor: isSender ? "var(--light-orange)" : "var(--primary)",
    borderRadius: "16px",
    fontSize: "16px",
    fontWeight: 600,
    width: "fit",
    px: 5,
    py: 3,
    animation: `${chatAnim} .2s`,
  };

  return (
    <HStack
      gap={4}
      alignItems={"flex-start"}
      flexDirection={isSender ? "row" : "row-reverse"}
    >
      <Avatar.Root
        backgroundColor={"var(--light-orange)"}
        color={"var(--secondary)"}
        width={"64px"}
        height={"64px"}
        animation={"fade-in .2s"}
      >
        <Avatar.Fallback name={user?.username} />
        {user?.image_url && <Avatar.Image src={user?.image_url} />}
      </Avatar.Root>
      <Stack gap={1} alignItems={isSender ? "flex-start" : "flex-end"}>
        <Box {...BOX_MESSAGE_STYLES}>{message}</Box>
        <Text
          fontSize={"14px"}
          textAlign={isSender ? "left" : "right"}
          animation={"fade-in .2s"}
        >
          {calculateTime(createdAt)}
        </Text>
      </Stack>
    </HStack>
  );
}
