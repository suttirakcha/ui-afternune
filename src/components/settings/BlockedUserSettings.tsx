import AvatarUser from "@/components/avatar/AvatarUser";
import AfnButton from "@/components/custom/AfnButton";
import { ListFallback } from "@/components/custom/ListFallback";
import { getProfile } from "@/services/auth.service";
import { User } from "@/types/users.type";
import { For, HStack, Stack, Text } from "@chakra-ui/react";
import { Fragment } from "react";

export default async function BlockedUserSettings() {
  const profile = await getProfile();
  return (
    <For
      each={profile.blocking_users}
      fallback={<ListFallback text="No blocked users" />}
    >
      {(profile: User) => {
        const { _id, username, image_url } = profile;
        return (
          <Fragment>
            <HStack justifyContent={"space-between"} key={_id}>
              <AvatarUser user={{ username, image_url }} />
              <AfnButton px={6} fontSize={"16px"}>
                Unblock
              </AfnButton>
            </HStack>
          </Fragment>
        );
      }}
    </For>
  );
}
