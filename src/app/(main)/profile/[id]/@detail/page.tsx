import NotFound from "@/app/not-found";
import AfnAmount from "@/components/custom/AfnAmount";
import AfnTitle from "@/components/custom/AfnTitle";
import FollowButton from "@/components/users/FollowButton";
import ProfileMessageButton from "@/components/users/ProfileMessageButton";
import ProfileOptions from "@/components/users/ProfileOptions";
import { getProfile } from "@/services/auth.service";
import { getFollowedUser, getUserById } from "@/services/users.service";
import { Avatar, AvatarGroup, HStack, Stack, Text } from "@chakra-ui/react";

interface ProfileDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProfileDetailPage({
  params,
}: ProfileDetailPageProps) {
  const { id } = await params;
  const profile = await getUserById(id);
  const currentProfile = await getProfile();

  if (!profile) {
    return <NotFound />;
  }

  const followed = await getFollowedUser(profile._id);
  const isLoggedInProfile = currentProfile?._id !== profile?._id;

  return (
    <Stack gap={10}>
      <HStack gap={7} alignItems={"center"}>
        <AfnTitle>{profile.username}</AfnTitle>
        {!currentProfile ||
          (isLoggedInProfile && (
            <Stack gap={4} flexDirection="row" alignItems="center">
              <FollowButton isAlreadyFollowed={!!followed} profile={profile} />
              <ProfileMessageButton profile={profile} />
              <ProfileOptions
                profile={profile}
                isAlreadyFollowed={!!followed}
              />
            </Stack>
          ))}
      </HStack>

      <HStack alignItems="flex-start" gap="60px">
        <AvatarGroup>
          <Avatar.Root
            width={256}
            height={256}
            backgroundColor="var(--light-orange)"
            color="var(--secondary)"
          >
            <Avatar.Fallback name={profile.username} fontSize={40} />
            {profile.image_url && <Avatar.Image src={profile.image_url} />}
          </Avatar.Root>
        </AvatarGroup>

        <Stack gap="30px">
          <HStack color="var(--secondary)" gap="60px">
            <AfnAmount
              title="Followers"
              amount={profile.followers?.length ?? 0}
            />
            <AfnAmount
              title="Following"
              amount={profile.following?.length ?? 0}
            />
          </HStack>

          <Text
            fontSize="20px"
            color={profile.bio ? "var(--primary)" : "var(--main-gray)"}
          >
            {profile.bio ?? "No bio yet"}
          </Text>
        </Stack>
      </HStack>
    </Stack>
  );
}
