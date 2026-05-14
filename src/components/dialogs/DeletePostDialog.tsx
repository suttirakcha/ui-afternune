"use client";

import AfnButton from "@/components/custom/AfnButton";
import AfnDialog from "@/components/custom/AfnDialog";
import { revalidatePosts } from "@/lib/revalidate";
import { deletePost } from "@/services/posts.service";
import { PostDialogProps } from "@/types/dialog.type";
import { handleMessage } from "@/utils/handle-message";
import { Grid, Stack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

export default function DeletePostDialog({
  open,
  onOpenChange,
  post,
}: PostDialogProps) {
  const t = useTranslations();
  const handleDeletePost = async () => {
    const response = await deletePost(post._id);
    if (response && !response.success) {
      return handleMessage(t(response.message));
    }
    revalidatePosts();
    onOpenChange({ open: false });
  };
  return (
    <AfnDialog open={open} onOpenChange={onOpenChange}>
      <Stack w={"full"} gap={6}>
        <Text fontSize={24} color="var(--secondary)" lineHeight={"28px"}>
          {t("Are you sure you want to delete this post")}
        </Text>
        <Grid templateColumns={"repeat(2, 1fr)"} gap={4}>
          <AfnButton onClick={handleDeletePost}>{t("Delete post")}</AfnButton>
          <AfnButton
            variant={"outline"}
            onClick={() => onOpenChange({ open: false })}
          >
            {t("Cancel")}
          </AfnButton>
        </Grid>
      </Stack>
    </AfnDialog>
  );
}
