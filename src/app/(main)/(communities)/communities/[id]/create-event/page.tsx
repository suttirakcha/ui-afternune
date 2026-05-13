import AfnTitle from "@/components/custom/AfnTitle";
import LinkBackBtn from "@/components/custom/LinkBackBtn";
import MainContainer from "@/components/custom/MainContainer";
import CommunityEventForm from "@/components/forms/CommunityEventForm";
import { getProfile } from "@/services/auth.service";
import { getCommunityById } from "@/services/communities.service";
import { handleMessage } from "@/utils/handle-message";
import { Stack } from "@chakra-ui/react";
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

  return (
    <MainContainer animated>
      <Stack maxWidth={600} width="full" marginX="auto" gap={10}>
        <LinkBackBtn href={`/communities/${community._id}`}>
          Back to community
        </LinkBackBtn>
        <AfnTitle>Create Community Event</AfnTitle>
        <CommunityEventForm community={community} />
      </Stack>
    </MainContainer>
  );
}
