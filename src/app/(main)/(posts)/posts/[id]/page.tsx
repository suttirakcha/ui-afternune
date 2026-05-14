import SinglePostDrawer from "@/components/posts/SinglePostDrawer";
import { getProfile } from "@/services/auth.service";
import { getCommentsByPostId } from "@/services/comments.service";
import { getPostById } from "@/services/posts.service";

interface SinglePostPageParams {
  params: Promise<{ id: string }>;
}

export default async function SinglePostPage({ params }: SinglePostPageParams) {
  const { id } = await params;
  const post = await getPostById(id);
  const comments = await getCommentsByPostId(id);

  const profile = await getProfile();

  return <SinglePostDrawer post={post} comments={comments} profile={profile} />;
}
