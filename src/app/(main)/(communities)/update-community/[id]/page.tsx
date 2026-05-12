import AfnTitle from "@/components/custom/AfnTitle";
import LinkBackBtn from "@/components/custom/LinkBackBtn";
import MainContainer from "@/components/custom/MainContainer";
import CommunityForm from "@/components/forms/CommunityForm";
import { getProfile } from "@/services/auth.service";
import { getCommunityById } from "@/services/communities.service";
import { handleMessage } from "@/utils/handle-message";
import { Stack } from "@chakra-ui/react";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Update community",
};

interface UpdateCommunityPageParams {
  params: Promise<{ id: string }>;
}

export default async function CreateCommunityPage({
  params,
}: UpdateCommunityPageParams) {
  const { id } = await params;
  const community = await getCommunityById(id);
  const profile = await getProfile();

  if (!community || community.creator_id !== profile?._id) {
    handleMessage(community.message);
    return redirect("/communities");
  }
  return (
    <MainContainer animated>
      <Stack maxWidth={600} width="full" marginX="auto" gap={10}>
        <LinkBackBtn href="/posts">Back to communities</LinkBackBtn>
        <AfnTitle>Update Community</AfnTitle>
        <CommunityForm community={community} />
      </Stack>
    </MainContainer>
  );
}
