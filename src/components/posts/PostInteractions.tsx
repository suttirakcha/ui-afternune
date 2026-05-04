import PostOptions from "@/components/posts/PostOptions";
import { Post } from "@/types/posts.type";
import { calculateTime } from "@/utils/calculate-time";
import { Box, CssProperties, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { LuHeart, LuMessageSquareMore } from "react-icons/lu";

interface PostInteractionsProps {
  post: Post;
}

const ICON_STYLES = {
  width: "24px",
  height: "24px",
  stroke: "var(--secondary)",
  strokeWidth: "2px",
  cursor: "pointer",
} satisfies CssProperties;

export default function PostInteractions({ post }: PostInteractionsProps) {
  const { createdAt, comments } = post;

  return (
    <HStack
      justifyContent={"space-between"}
      alignItems={"center"}
      color={"var(--secondary)"}
      width={"full"}
    >
      <HStack gap={4} fontWeight={600} fontSize={"20px"}>
        <HStack gap={2}>
          <LuHeart
          // onClick={handleClickLike}
          // style={{
          //   ...iconStyles,
          //   // fill: '',
          //   fill: clickedLike ? "var(--secondary)" : "",
          // }}
          />
          <Text>{0}</Text>
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
        <PostOptions post={post} />
      </HStack>
    </HStack>
  );
}
