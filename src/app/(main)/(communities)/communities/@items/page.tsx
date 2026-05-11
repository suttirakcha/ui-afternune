import CommunityCard from "@/components/communities/CommunityCard";
import AfnTitle from "@/components/custom/AfnTitle";
import { For, Stack } from "@chakra-ui/react";
import Link from "next/link";

export default function CommunityItemsPage() {
  return (
    <Stack>
      <AfnTitle>Communities</AfnTitle>
      {/* <Stack gap={4}>
        <For each={communities}>
          {(community) => (
            <Link href={`/communities/${community._id}`} key={community._id}>
              <CommunityCard community={community} />
            </Link>
          )}
        </For>
      </Stack> */}
      <Stack gap={4}>
        <Link href="/">
          <CommunityCard />
        </Link>
        <Link href="/">
          <CommunityCard />
        </Link>
        <Link href="/">
          <CommunityCard />
        </Link>
      </Stack>
    </Stack>
  );
}
