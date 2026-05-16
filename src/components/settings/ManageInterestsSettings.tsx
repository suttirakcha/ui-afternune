import ManageInterestsForm from "@/components/forms/ManageInterestsForm";
import { getProfile } from "@/services/auth.service";
import { Stack, Text } from "@chakra-ui/react";

export default async function ManageInterestsSettings() {
  const profile = await getProfile();
  return <ManageInterestsForm profile={profile} />;
}
