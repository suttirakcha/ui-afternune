"use client";

import { For, Stack, Text } from "@chakra-ui/react";
import { Fragment, useCallback, useEffect, useState } from "react";
import AvatarMessage from "../avatar/AvatarMessage";
import { ChatRoom } from "@/types/messages.type";
import { getAllChatRooms } from "@/services/messages.service";
import { handleMessage } from "@/utils/handle-message";
import Loading from "@/components/custom/Loading";
import Pusher from "pusher-js";

export default function ChatRoomList({ userId }: { userId: string }) {
  const [rooms, setRooms] = useState<ChatRoom[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleFetchRooms = useCallback(async () => {
    setIsLoading(true);
    const response = await getAllChatRooms();
    if (!response.success) {
      return handleMessage(response.message);
    }
    setRooms(response.data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    handleFetchRooms();
  }, []);

  useEffect(() => {
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY!, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER!,
    });

    // ✅ Subscribe to user-specific channel
    const channel = pusher.subscribe(`chatrooms-${userId}`);

    channel.bind("update-room", (updatedRoom: ChatRoom) => {
      setRooms((prev) => {
        const exists = prev.find((r) => r._id === updatedRoom._id);

        if (exists) {
          return [
            { ...exists, lastMessage: updatedRoom.lastMessage },
            ...prev.filter((r) => r._id !== updatedRoom._id),
          ];
        }

        return [updatedRoom, ...prev];
      });
    });

    return () => {
      channel.unbind_all();
      pusher.unsubscribe(`chatrooms-${userId}`);
      pusher.disconnect();
    };
  }, [userId]);

  return (
    <Stack gap={4}>
      {isLoading ? (
        <Stack alignItems="center" py={10}>
          <Loading />
        </Stack>
      ) : (
        <For
          each={rooms}
          fallback={
            <Text>
              No messages shown. Let&apos;s make a conversation with others.
            </Text>
          }
        >
          {(room, index) => {
            return (
              <Fragment key={room?._id}>
                <AvatarMessage
                  username={room?.receiver?.username}
                  link={`/messages/${room?.receiver?._id}`}
                  message={room?.lastMessage}
                  lineClamp={1}
                />
                {rooms.length !== index + 1 && (
                  <Stack
                    width={"100%"}
                    backgroundColor={"var(--light-orange-2)"}
                    height={"2px"}
                  />
                )}
              </Fragment>
            );
          }}
        </For>
      )}
    </Stack>
  );
}
