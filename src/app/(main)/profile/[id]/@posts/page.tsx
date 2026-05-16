import { ListFallback } from "@/components/custom/ListFallback";
import PostsList from "@/components/posts/PostsList";
import { getProfile } from "@/services/auth.service";
import { getUserById } from "@/services/users.service";

interface ProfilePostPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProfilePostPage({
  params,
}: ProfilePostPageProps) {
  const { id } = await params;
  const { data: user } = await getUserById(id);
  const profile = await getProfile();
  const { posts } = user;

  return (
    <PostsList
      posts={posts}
      fallback={<ListFallback text="Hmm, there are no posts here" />}
      profile={profile}
    />
  );
}
