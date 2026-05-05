import AfnTitle from "@/components/custom/AfnTitle";
import LinkBackBtn from "@/components/custom/LinkBackBtn";
import MainContainer from "@/components/custom/MainContainer";
import PostForm from "@/components/forms/PostForm";
import { Stack } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create post",
};

export default function CreatePostPage() {
  return (
    <MainContainer animated>
      <Stack maxWidth={600} width="full" marginX="auto" gap={10}>
        <LinkBackBtn href="/posts">Back to posts</LinkBackBtn>
        <AfnTitle>Create Post</AfnTitle>
        <PostForm />
      </Stack>
    </MainContainer>
  );
}
