import JoinedCommunityList from "@/components/communities/JoinedCommunityList";
import { getProfile } from "@/services/auth.service";

export default async function JoinedCommunityPage() {
  const profile = await getProfile();
  return <JoinedCommunityList profile={profile} />;
}
