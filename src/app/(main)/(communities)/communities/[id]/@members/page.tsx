import AvatarUser from "@/components/avatar/AvatarUser";
import AfnTitle from "@/components/custom/AfnTitle";
import { getCommunityById } from "@/services/communities.service";
import { User } from "@/types/users.type";
import { For, Stack } from "@chakra-ui/react";

interface CommunityMembersPageParams {
  params: Promise<{ id: string }>;
}

export default async function CommunityMembersPage({
  params,
}: CommunityMembersPageParams) {
  const { id } = await params;
  const community = await getCommunityById(id);

  const { members } = community;

  return (
    <Stack gap={10}>
      <AfnTitle>Members</AfnTitle>
      <Stack gap={5}>
        <For each={members}>
          {(member: User) => <AvatarUser user={member} />}
        </For>
      </Stack>
    </Stack>
  );
}
