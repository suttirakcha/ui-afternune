import AfnTitle from "@/components/custom/AfnTitle";
import LinkBackBtn from "@/components/custom/LinkBackBtn";
import MainContainer from "@/components/custom/MainContainer";
import PostForm from "@/components/forms/PostForm";
import { getProfile } from "@/services/auth.service";
import { getPostById } from "@/services/posts.service";
import { handleMessage } from "@/utils/handle-message";
import { Stack } from "@chakra-ui/react";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Create post",
};

interface UpdatePostPageParams {
  params: Promise<{ id: string }>;
}

export default async function UpdatePostPage({ params }: UpdatePostPageParams) {
  const { id } = await params;
  const post = await getPostById(id);
  const profile = await getProfile();

  if (!post || post.user_id !== profile._id) {
    handleMessage(post.message);
    return redirect("/posts");
  }

  return (
    <MainContainer animated>
      <Stack maxWidth={600} width="full" marginX="auto" gap={10}>
        <LinkBackBtn href="/posts">Back to posts</LinkBackBtn>
        <AfnTitle>Update Post</AfnTitle>
        <PostForm post={post} />
      </Stack>
    </MainContainer>
  );
}
