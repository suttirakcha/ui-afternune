import { PostFallback } from "@/components/posts/PostFallback";
import PostsList from "@/components/posts/PostsList";
import { getProfile } from "@/services/auth.service";
import { getUserById } from "@/services/users.service";
import { Stack } from "@chakra-ui/react";

interface ProfilePostPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProfilePostPage({
  params,
}: ProfilePostPageProps) {
  const { id } = await params;
  const user = await getUserById(id);
  const profile = await getProfile();
  const { posts } = user;

  return (
    <Stack gap={6}>
      <PostsList posts={posts} fallback={<PostFallback />} profile={profile} />
    </Stack>
  );
}
