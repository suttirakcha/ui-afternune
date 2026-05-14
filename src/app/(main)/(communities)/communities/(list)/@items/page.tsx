import CommunityList from "@/components/communities/CommunityList";
import { getCommunities } from "@/services/communities.service";

export default async function CommunityItemsPage() {
  const communities = await getCommunities();

  return <CommunityList communities={communities} />;
}
