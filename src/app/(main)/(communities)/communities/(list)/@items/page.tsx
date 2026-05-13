import CommunityCard from "@/components/communities/CommunityCard";
import AfnTitle from "@/components/custom/AfnTitle";
import { getCommunities } from "@/services/communities.service";
import { Community } from "@/types/communities.type";
import { For, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default async function CommunityItemsPage() {
  const communities = await getCommunities();

  return (
    <Stack gap={10}>
      <AfnTitle>Communities</AfnTitle>
      <Stack gap={4}>
        <For each={communities}>
          {(community: Community) => (
            <Link href={`/communities/${community._id}`} key={community._id}>
              <CommunityCard community={community} />
            </Link>
          )}
        </For>
      </Stack>
    </Stack>
  );
}
