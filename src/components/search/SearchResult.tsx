"use client";

import AvatarUser from "@/components/avatar/AvatarUser";
import AfnTitle from "@/components/custom/AfnTitle";
import Loading from "@/components/custom/Loading";
import { getUsers } from "@/services/users.service";
import { User } from "@/types/users.type";
import { For, Stack, Text, VStack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";

interface SearchResultProps {
  search: string;
}

export default function SearchResult({ search }: SearchResultProps) {
  const t = useTranslations();
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const handleFetchUsers = useCallback(async () => {
    try {
      setIsLoading(true);
      const fetchedUsers = await getUsers({
        search,
        limit: 5,
      });
      setUsers(fetchedUsers);
    } finally {
      setIsLoading(false);
    }
  }, [search]);

  useEffect(() => {
    handleFetchUsers();
  }, [search]);

  return (
    <VStack>
      <Stack
        boxShadow={"var(--main-box-shadow)"}
        p={6}
        borderRadius={"16px"}
        gap={6}
        animation={"fade-in 1s"}
        width={"full"}
      >
        <AfnTitle size={"small"}>
          {t(search ? "Search results" : "Suggested users")}
        </AfnTitle>
        <Stack gap={4}>
          <For
            each={users}
            fallback={
              isLoading ? (
                <Stack alignItems={"center"} width={"full"}>
                  <Loading />
                </Stack>
              ) : (
                <Text>{t("No users found")}</Text>
              )
            }
          >
            {(profile) => {
              const { _id, username, image_url } = profile;
              return (
                <AvatarUser
                  user={{ username, image_url }}
                  link={`/profile/${_id}`}
                  key={_id}
                />
              );
            }}
          </For>
        </Stack>
      </Stack>
    </VStack>
  );
}
