"use client";

import CommunityCard from "@/components/communities/CommunityCard";
import AfnTitle from "@/components/custom/AfnTitle";
import { Community } from "@/types/communities.type";
import { For, Stack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Link from "next/link";

interface CommunityListProps {
  communities: Community[];
}

export default function CommunityList({ communities }: CommunityListProps) {
  const [items, setItems] = useState(communities);
  const t = useTranslations();
  return (
    <Stack gap={10} paddingBottom={10}>
      <AfnTitle>{t("Communities")}</AfnTitle>
      <Stack gap={4}>
        <For each={items}>
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
