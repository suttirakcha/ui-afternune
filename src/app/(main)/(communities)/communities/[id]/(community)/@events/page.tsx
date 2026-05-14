import CommunityTabs from "@/components/communities/CommunityTabs";
import { getProfile } from "@/services/auth.service";
import {
  getCommunityById,
  getCommunityMembers,
} from "@/services/communities.service";

interface CommunityEventsPageParams {
  params: Promise<{ id: string }>;
}

export default async function CommunityEventsPage({
  params,
}: CommunityEventsPageParams) {
  const { id } = await params;
  const community = await getCommunityById(id);
  const profile = await getProfile();

  const isCreator = community?.creator_id === profile?._id;
  const joined = await getCommunityMembers(community?._id);

  return (
    <CommunityTabs
      events={community?.events}
      isCreator={isCreator}
      isJoined={!!joined}
    />
  );
}
