import ManageInterestsForm from "@/components/forms/ManageInterestsForm";
import { getProfile } from "@/services/auth.service";
import { Stack, Text } from "@chakra-ui/react";

export default async function ManageInterestsSettings() {
  const profile = await getProfile();
  return (
    <Stack gap={6}>
      <Text>
        Your interests will be used for any post and community suggestions.
      </Text>
      <ManageInterestsForm profile={profile} />
    </Stack>
  );
}
