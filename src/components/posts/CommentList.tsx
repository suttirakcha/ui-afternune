import AvatarMessage from "@/components/avatar/AvatarMessage";
import AfnTitle from "@/components/custom/AfnTitle";
import { Comment } from "@/types/posts.type";
import { For, Stack, Text } from "@chakra-ui/react";

interface CommentListProps {
  comments: Comment[];
}

export default function CommentList({ comments }: CommentListProps) {
  return (
    <Stack gap={4} h={"fit"}>
      <AfnTitle size={"small"}>Comments</AfnTitle>
      <Stack gap={4}>
        <For each={comments} fallback={<Text>No comments yet</Text>}>
          {(comment) => (
            <AvatarMessage
              key={comment._id}
              username={comment?.user?.username ?? "Guest"}
              message={comment.detail}
              image_url={comment?.user?.image_url}
            />
          )}
        </For>
      </Stack>
    </Stack>
  );
}
