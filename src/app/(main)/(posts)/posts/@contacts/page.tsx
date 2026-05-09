import AvatarUser from "@/components/avatar/AvatarUser";
import AfnTitle from "@/components/custom/AfnTitle";
import { getProfile } from "@/services/auth.service";
import { User } from "@/types/users.type";
import { For, Stack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default async function ContactPage() {
  const profile = await getProfile();

  return (
    <Stack position="sticky" top={10} gap={10}>
      <AfnTitle>Contacts</AfnTitle>
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
            {(contact: User) => (
              <Link href={`/messages/${contact.username}`} key={contact._id}>
                <AvatarUser user={contact} />
              </Link>
            )}
          </For>
        </VStack>
      ) : (
        <Text>Please login to see the contact list.</Text>
      )}
    </Stack>
  );
}
