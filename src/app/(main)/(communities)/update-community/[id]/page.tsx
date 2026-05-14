import CommunityFormTemplate from "@/components/communities/CommunityFormTemplate";
import { getProfile } from "@/services/auth.service";
import { getCommunityById } from "@/services/communities.service";
import { handleMessage } from "@/utils/handle-message";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Update community",
};

interface UpdateCommunityPageParams {
  params: Promise<{ id: string }>;
}

export default async function UpdateCommunityPage({
  params,
}: UpdateCommunityPageParams) {
  const { id } = await params;
  const community = await getCommunityById(id);
  const profile = await getProfile();

  if (!community || community.creator_id !== profile?._id) {
    handleMessage(community.message);
    return redirect("/communities");
  }
  return <CommunityFormTemplate community={community} />;
}
