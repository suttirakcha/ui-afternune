import CommunityEventFormTemplate from "@/components/communities/CommunityEventFormTemplate";
import { getProfile } from "@/services/auth.service";
import { getCommunityById } from "@/services/communities.service";
import { handleMessage } from "@/utils/handle-message";
import { redirect } from "next/navigation";

interface CreateCommunityEventPageParams {
  params: Promise<{ id: string }>;
}

export default async function CreateCommunityEventPage({
  params,
}: CreateCommunityEventPageParams) {
  const { id } = await params;
  const community = await getCommunityById(id);
  const profile = await getProfile();

  if (!community || community.creator_id !== profile?._id) {
    handleMessage(community.message);
    return redirect("/communities");
  }

  return <CommunityEventFormTemplate community={community} />;
}
