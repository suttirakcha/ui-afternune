"use client";

import { Stack, Text } from "@chakra-ui/react";
import AfnDialog from "@/components/custom/AfnDialog";
import { useState } from "react";
import { AuthType } from "@/types/auth.type";
import { ModalOpenProps } from "@/types/dialog.type";
import AfnCloseButton from "@/components/custom/AfnCloseButton";

export default function AuthDialog({ open, onOpenChange }: ModalOpenProps) {
  const [authType, setAuthType] = useState<AuthType>(AuthType.LOGIN);

  const handleClose = () => {
    onOpenChange({ open: false });
    setTimeout(() => setAuthType(AuthType.LOGIN), 500);
  };

  return (
    <AfnDialog open={open} onOpenChange={handleClose}>
      <Stack w={"full"} gap={6}>
        <Text fontSize={24} color="var(--secondary)">
          {authType}
        </Text>
      </Stack>
      <AfnCloseButton onClick={handleClose} />
    </AfnDialog>
  );
}
