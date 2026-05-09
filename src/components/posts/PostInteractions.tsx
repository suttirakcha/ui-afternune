import LikeButton from "@/components/posts/LikeButton";
import PostOptions from "@/components/posts/PostOptions";
import { Post } from "@/types/posts.type";
import { User } from "@/types/users.type";
import { calculateTime } from "@/utils/calculate-time";
import { Box, CssProperties, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { LuHeart, LuMessageSquareMore } from "react-icons/lu";

interface PostInteractionsProps {
  post: Post;
  profile: User;
}

const ICON_STYLES = {
  width: "24px",
  height: "24px",
  stroke: "var(--secondary)",
  strokeWidth: "2px",
  cursor: "pointer",
} satisfies CssProperties;

export default function PostInteractions({
  post,
  profile,
}: PostInteractionsProps) {
  const { createdAt, comments, likes, user } = post;

  return (
    <HStack
      justifyContent={"space-between"}
      alignItems={"center"}
      color={"var(--secondary)"}
      width={"full"}
    >
      <HStack gap={4} fontWeight={600} fontSize={"20px"}>
        <HStack gap={2}>
          <LikeButton post={post} style={ICON_STYLES} profile={profile} />
          <Text>{likes.length ?? 0}</Text>
        </HStack>
        <Box
          height={"24px"}
          width={"2px"}
          backgroundColor={"var(--secondary)"}
        />
        <HStack gap={2}>
          <LuMessageSquareMore style={ICON_STYLES} />
          <Text>{comments.length ?? 0}</Text>
        </HStack>
      </HStack>
      <HStack>
        <Text>{calculateTime(createdAt)}</Text>
        <PostOptions post={post} profile={profile} />
      </HStack>
    </HStack>
  );
}
