"use client";

import AfnButton from "@/components/custom/AfnButton";
import AfnDialog from "@/components/custom/AfnDialog";
import { revalidateFollow } from "@/lib/revalidate";
import { unfollowUser } from "@/services/users.service";
import { ProfileDialogProps } from "@/types/dialog.type";
import { handleMessage } from "@/utils/handle-message";
import { Grid, Stack, Text } from "@chakra-ui/react";

export default function UnfollowDialog({
  open,
  onOpenChange,
  profile,
}: ProfileDialogProps) {
  const handleUnfollow = async () => {
    const response = await unfollowUser(profile._id);
    if (response && !response.success) {
      return handleMessage(response.message);
    }
    revalidateFollow();
    onOpenChange({ open: false });
  };
  return (
    <AfnDialog open={open} onOpenChange={onOpenChange}>
      <Stack w={"full"} gap={6}>
        <Text fontSize={24} color="var(--secondary)" lineHeight={"30px"}>
          Are you sure you want to unfollow user &quot;{profile.username}
          &quot;?
        </Text>
        <Grid templateColumns={"repeat(2, 1fr)"} gap={4}>
          <AfnButton onClick={handleUnfollow}>Unfollow</AfnButton>
          <AfnButton
            variant={"outline"}
            onClick={() => onOpenChange({ open: false })}
          >
            Cancel
          </AfnButton>
        </Grid>
      </Stack>
    </AfnDialog>
  );
}
