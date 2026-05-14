import CommunityMembersList from "@/components/communities/CommunityMembersList";
import { getCommunityById } from "@/services/communities.service";

interface CommunityMembersPageParams {
  params: Promise<{ id: string }>;
}

export default async function CommunityMembersPage({
  params,
}: CommunityMembersPageParams) {
  const { id } = await params;
  const community = await getCommunityById(id);

  const { members } = community;

  return <CommunityMembersList members={members} />;
}
