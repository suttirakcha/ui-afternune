import AfnTitle from "@/components/custom/AfnTitle";
import ContactList from "@/components/users/ContactList";
import { getProfile } from "@/services/auth.service";
import { Stack } from "@chakra-ui/react";

export default async function ContactPage() {
  const profile = await getProfile();

  return (
    <Stack position="sticky" top={10} gap={10}>
      <AfnTitle>Contacts</AfnTitle>
      <ContactList profile={profile} />
    </Stack>
  );
}
