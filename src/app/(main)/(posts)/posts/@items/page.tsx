import { ListFallback } from "@/components/custom/ListFallback";
import PostsList from "@/components/posts/PostsList";
import { getProfile } from "@/services/auth.service";
import { getPosts } from "@/services/posts.service";

export default async function PostItemsPage() {
  const { data: posts } = await getPosts({
    limit: 2,
  });
  const profile = await getProfile();

  return (
    <PostsList
      posts={posts}
      profile={profile}
      allowToCreatePost
      fallback={<ListFallback text="No posts yet" />}
    />
  );
}
