import CreatePostButton from "@/components/posts/CreatePostButton";
import PostsList from "@/components/posts/PostsList";
import { getProfile } from "@/services/auth.service";
import { getPosts } from "@/services/posts.service";
import { CssProperties, Stack, Text } from "@chakra-ui/react";

const POST_ITEMS_STYLES = {
  gap: 6,
  width: "full",
  marginBlock: "auto",
} satisfies CssProperties;

export default async function PostItemsPage() {
  const posts = await getPosts();
  const profile = await getProfile();

  return (
    <Stack {...POST_ITEMS_STYLES}>
      <CreatePostButton />
      <PostsList
        posts={posts}
        profile={profile}
        fallback={
          <Text textAlign="center">
            No posts yet, be the first post creator to share with others.
          </Text>
        }
      />
    </Stack>
  );
}
