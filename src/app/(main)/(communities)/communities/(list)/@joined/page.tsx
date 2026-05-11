import AvatarCommunity from "@/components/avatar/AvatarCommunity";
import AfnTitle from "@/components/custom/AfnTitle";
import { getProfile } from "@/services/auth.service";
import { Community } from "@/types/communities.type";
import { For, Stack, Text } from "@chakra-ui/react";

export default async function JoinedCommunityPage() {
  const profile = await getProfile();
  return (
    <Stack position="sticky" top={10} gap={10}>
      <AfnTitle>Joined</AfnTitle>
      <Stack gap={6}>
        {profile ? (
          <For
            each={profile.joined_communities}
            fallback={<Text>You have not joined any communities.</Text>}
          >
            {(community: Community) => (
              <AvatarCommunity
                key={community?._id}
                community={community}
                link={`/communities/${community?._id}`}
              />
            )}
          </For>
        ) : (
          <Text>Please login to see the joined communities</Text>
        )}
      </Stack>
    </Stack>
  );
}
