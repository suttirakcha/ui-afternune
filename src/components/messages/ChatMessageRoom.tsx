"use client";

import AvatarChat from "@/components/avatar/AvatarChat";
import AfnBadge from "@/components/custom/AfnBadge";
import ChatMessageForm from "@/components/forms/ChatMessageForm";
import { ChatMessage, type ChatRoom } from "@/types/messages.type";
import { Box, For, Stack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import Pusher from "pusher-js";
import { useEffect, useRef, useState } from "react";

interface ChatMessageRoomProps {
  room: ChatRoom;
  messages: ChatMessage[];
}

export default function ChatMessageRoom({
  room,
  messages: initialMessages,
}: ChatMessageRoomProps) {
  const t = useTranslations();
  const bottomRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);

  useEffect(() => {
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY!, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER!,
    });

    const channel = pusher.subscribe(`chat-${room?._id}`);

    channel.bind("new-message", (data: ChatMessage) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      channel.unbind_all();
      pusher.unsubscribe(`chat-${room?._id}`);
      pusher.disconnect();
    };
  }, [room?._id]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Stack
      px={6}
      py={8}
      flexDirection="column"
      justifyContent="space-between"
      height="calc(100dvh - 72px)"
      lg={{ borderLeft: "2px solid var(--light-orange)" }}
    >
      <Stack gap={6} overflow={"auto"}>
        <For
          each={messages}
          fallback={
            <Box margin="auto">
              <AfnBadge cursor="default">
                {t("You can start the conversation here", {
                  receiver: room?.receiver?.username,
                })}
              </AfnBadge>
            </Box>
          }
        >
          {(message: ChatMessage) => {
            const isSender = message.sender?._id === room?.receiver?._id;
            return (
              <AvatarChat
                key={message._id}
                user={message.sender}
                isSender={isSender}
                message={message.message}
                createdAt={message.createdAt}
              />
            );
          }}
        </For>
        <Box ref={bottomRef} />
      </Stack>
      <ChatMessageForm receiver_id={room?.receiver?._id} />
    </Stack>
  );
}
