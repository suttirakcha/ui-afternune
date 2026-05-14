"use client";

import AfnButton from "@/components/custom/AfnButton";
import AfnDialog from "@/components/custom/AfnDialog";
import { revalidateCommunity } from "@/lib/revalidate";
import { leaveCommunity } from "@/services/communities.service";
import { CommunityDialogProps } from "@/types/dialog.type";
import { handleMessage } from "@/utils/handle-message";
import { Grid, Stack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

export default function LeaveCommunityDialog({
  open,
  onOpenChange,
  community,
}: CommunityDialogProps) {
  const t = useTranslations();
  const handleLeaveCommunity = async () => {
    const response = await leaveCommunity(community._id);
    if (!response.success) {
      return handleMessage(t(response.message));
    }
    handleMessage(t(response.message));
    revalidateCommunity();
    onOpenChange({ open: false });
  };
  return (
    <AfnDialog open={open} onOpenChange={onOpenChange}>
      <Stack w={"full"} gap={6}>
        <Text fontSize={24} color="var(--secondary)" lineHeight={"28px"}>
          {t("Are you sure you want to leave the community", {
            title: community?.title,
          })}
        </Text>
        <Grid templateColumns={"repeat(2, 1fr)"} gap={4}>
          <AfnButton onClick={handleLeaveCommunity}>
            {t("Leave community")}
          </AfnButton>
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
