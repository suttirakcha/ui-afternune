"use client";

import AfnButton from "@/components/custom/AfnButton";
import AfnDialog from "@/components/custom/AfnDialog";
import { revalidateBlock } from "@/lib/revalidate";
import { blockUser, unblockUser } from "@/services/users.service";
import { BlockUserDialogProps } from "@/types/dialog.type";
import { handleMessage } from "@/utils/handle-message";
import { Grid, Stack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

export default function BlockUserDialog({
  open,
  onOpenChange,
  profile,
  isBlocked,
}: BlockUserDialogProps) {
  const t = useTranslations();
  const blockMessage = t(
    isBlocked ? "You will be able to see it" : "You will no longer see it",
    { username: profile.username }
  );

  const handleBlock = async () => {
    const response = await blockUser(profile._id);
    if (!response.success) {
      return handleMessage(t(response.message));
    }
    handleMessage(t(response.message));
    revalidateBlock();
    onOpenChange({ open: false });
  };

  const handleUnblock = async () => {
    const response = await unblockUser(profile._id);
    if (!response.success) {
      return handleMessage(t(response.message));
    }
    handleMessage(t(response.message));
    revalidateBlock();
    onOpenChange({ open: false });
  };

  return (
    <AfnDialog open={open} onOpenChange={onOpenChange}>
      <Stack w={"full"} gap={6}>
        <Text fontSize={24} color="var(--secondary)">
          {t(isBlocked ? "Unblock user" : "Block user", {
            username: profile.username,
          })}
        </Text>
        <Text fontSize={"16px"} fontWeight={600}>
          {blockMessage}
        </Text>
        <Grid templateColumns={"repeat(2, 1fr)"} gap={4}>
          {isBlocked ? (
            <AfnButton onClick={handleUnblock}>{t("Unblock")}</AfnButton>
          ) : (
            <AfnButton onClick={handleBlock}>{t("Block")}</AfnButton>
          )}
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
