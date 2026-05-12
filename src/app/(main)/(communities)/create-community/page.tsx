import AfnTitle from "@/components/custom/AfnTitle";
import LinkBackBtn from "@/components/custom/LinkBackBtn";
import MainContainer from "@/components/custom/MainContainer";
import CommunityForm from "@/components/forms/CommunityForm";
import { Stack } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create community",
};

export default function CreateCommunityPage() {
  return (
    <MainContainer animated>
      <Stack maxWidth={600} width="full" marginX="auto" gap={10}>
        <LinkBackBtn href="/posts">Back to communities</LinkBackBtn>
        <AfnTitle>Create Community</AfnTitle>
        <CommunityForm />
      </Stack>
    </MainContainer>
  );
}
