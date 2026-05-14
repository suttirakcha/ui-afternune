import PostFormTemplate from "@/components/posts/PostFormTemplate";
import { getProfile } from "@/services/auth.service";
import { getPostById } from "@/services/posts.service";
import { handleMessage } from "@/utils/handle-message";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Update post",
};

interface UpdatePostPageParams {
  params: Promise<{ id: string }>;
}

export default async function UpdatePostPage({ params }: UpdatePostPageParams) {
  const { id } = await params;
  const post = await getPostById(id);
  const profile = await getProfile();

  if (!post || post.user_id !== profile?._id) {
    handleMessage(post.message);
    return redirect("/posts");
  }

  return <PostFormTemplate post={post} />;
}
