import GenderBadge from "@/components/users/GenderBadge";
import InterestBadges from "@/components/users/InterestBadges";
import { getUserById } from "@/services/users.service";
import { Stack } from "@chakra-ui/react";

interface ProfileInterestsPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProfileInterestsPage({
  params,
}: ProfileInterestsPageProps) {
  const { id } = await params;
  const { data: user } = await getUserById(id);

  const { interests, gender } = user;

  return (
    <Stack gap={10}>
      <InterestBadges interests={interests} />
      <GenderBadge gender={gender} />
    </Stack>
  );
}
