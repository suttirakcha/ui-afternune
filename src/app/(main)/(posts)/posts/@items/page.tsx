import PostsList from "@/components/posts/PostsList";
import { getProfile } from "@/services/auth.service";
import { getPosts } from "@/services/posts.service";
import { Text } from "@chakra-ui/react";

export default async function PostItemsPage() {
  const posts = await getPosts(2);
  const profile = await getProfile();

  return (
    <PostsList
      posts={posts}
      profile={profile}
      allowToCreatePost
      fallback={
        <Text textAlign="center">
          No posts yet, be the first post creator to share with others.
        </Text>
      }
    />
  );
}
