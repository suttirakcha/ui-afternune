"use client";

import AvatarUser from "@/components/avatar/AvatarUser";
import { getChatRoomByReceiverId } from "@/services/messages.service";
import { User } from "@/types/users.type";
import { Button, For, Stack, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

interface ContactListProps {
  profile: User;
}

export default function ContactList({ profile }: ContactListProps) {
  const router = useRouter();
  return (
    <Fragment>
      {profile ? (
        <VStack gap={5} alignItems="flex-start">
          <For
            each={profile.following}
            fallback={
              <Text>
                No contacts yet, let's find new friends and have chat with them.
              </Text>
            }
          >
            {(contact: User) => {
              const handleChatRoom = async () => {
                const roomResponse = await getChatRoomByReceiverId(contact._id);
                router.push(`/messages/${roomResponse?.room?.receiver?._id}`);
              };
              return (
                <Stack key={contact._id} onClick={handleChatRoom}>
                  <AvatarUser user={contact} />
                </Stack>
              );
            }}
          </For>
        </VStack>
      ) : (
        <Text>Please login to see the contact list.</Text>
      )}
    </Fragment>
  );
}
