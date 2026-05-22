import { ListFallback } from "@/components/custom/ListFallback";
import PostsList from "@/components/posts/PostsList";
import { getPosts } from "@/services/posts.service";
import { getUserById } from "@/services/users.service";

interface ProfilePostPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProfilePostPage({
  params,
}: ProfilePostPageProps) {
  const { id } = await params;
  const { data: user } = await getUserById(id);
  const { data: posts } = await getPosts({
    limit: 2,
    userId: user._id,
  });

  return (
    <PostsList
      posts={posts}
      fallback={<ListFallback text="Hmm, there are no posts here" />}
      profile={user}
      userId={user._id}
    />
  );
}
