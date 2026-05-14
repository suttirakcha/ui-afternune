"use client";

import CommunityCard from "@/components/communities/CommunityCard";
import AfnTitle from "@/components/custom/AfnTitle";
import { Community } from "@/types/communities.type";
import { For, HStack, Stack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Link from "next/link";
import AfnButton from "@/components/custom/AfnButton";
import { useRouter } from "next/navigation";

interface CommunityListProps {
  communities: Community[];
}

export default function CommunityList({ communities }: CommunityListProps) {
  const t = useTranslations();
  const router = useRouter();
  const [items, setItems] = useState(communities);
  return (
    <Stack gap={10} paddingBottom={10}>
      <HStack gap={7} alignItems="center">
        <AfnTitle>{t("Communities")}</AfnTitle>
        <AfnButton
          px={6}
          fontSize={"16px"}
          onClick={() => router.push("/create-community")}
        >
          {t("Create")}
        </AfnButton>
      </HStack>
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
