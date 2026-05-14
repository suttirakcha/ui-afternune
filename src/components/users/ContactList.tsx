"use client";

import AvatarUser from "@/components/avatar/AvatarUser";
import AfnTitle from "@/components/custom/AfnTitle";
import { getChatRoomByReceiverId } from "@/services/messages.service";
import { User } from "@/types/users.type";
import { For, Stack, Text, VStack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

interface ContactListProps {
  profile: User;
}

export default function ContactList({ profile }: ContactListProps) {
  const t = useTranslations();
  const router = useRouter();
  return (
    <Stack position="sticky" top={10} gap={10}>
      <AfnTitle>{t("Contacts")}</AfnTitle>
      {profile ? (
        <VStack gap={5} alignItems="flex-start">
          <For
            each={profile.following}
            fallback={
              <Text>
                {t(
                  "No contacts yet, let's find new friends and have chat with them"
                )}
              </Text>
            }
          >
            {(contact: User) => {
              const handleChatRoom = async () => {
                const roomResponse = await getChatRoomByReceiverId(contact._id);
                if (roomResponse.success) {
                  router.push(
                    `/messages/${roomResponse?.data?.room?.receiver?._id}`
                  );
                }
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
    </Stack>
  );
}
