"use client";

import AvatarMessage from "@/components/avatar/AvatarMessage";
import AfnTitle from "@/components/custom/AfnTitle";
import { Comment } from "@/types/posts.type";
import { For, Stack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

interface CommentListProps {
  comments: Comment[];
}

export default function CommentList({ comments }: CommentListProps) {
  const t = useTranslations();
  return (
    <Stack gap={4} h="fit">
      <AfnTitle size="small">{t("Comments")}</AfnTitle>
      <Stack gap={4}>
        <For each={comments} fallback={<Text>{t("No comments yet")}</Text>}>
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
