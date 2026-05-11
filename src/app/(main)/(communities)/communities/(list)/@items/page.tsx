import CommunityCard from "@/components/communities/CommunityCard";
import AfnTitle from "@/components/custom/AfnTitle";
import { getCommunities } from "@/services/communities.service";
import { Community } from "@/types/communities.type";
import { For, Stack } from "@chakra-ui/react";

export default async function CommunityItemsPage() {
  const communities = await getCommunities();

  return (
    <Stack gap={6}>
      <AfnTitle>Communities</AfnTitle>
      <Stack gap={4}>
        <For each={communities}>
          {(community: Community) => (
            <CommunityCard community={community} key={community._id} />
          )}
        </For>
      </Stack>
    </Stack>
  );
}
