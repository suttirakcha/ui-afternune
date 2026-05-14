"use client";

import { Stack, Text } from "@chakra-ui/react";
import AfnDialog from "@/components/custom/AfnDialog";
import { useState } from "react";
import { AuthType } from "@/types/auth.type";
import AfnCloseButton from "@/components/custom/AfnCloseButton";
import LoginForm from "@/components/forms/LoginForm";
import RegisterForm from "@/components/forms/RegisterForm";
import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";
import { useRouter } from "next/navigation";
import { DialogOpenProps } from "@/types/dialog.type";

export default function AuthDialog({ open, onOpenChange }: DialogOpenProps) {
  const router = useRouter();
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

        {authType === AuthType.LOGIN && <LoginForm />}

        {authType === AuthType.REGISTER && <RegisterForm />}

        {authType === AuthType.RESET_PASSWORD && <ForgotPasswordForm />}
      </Stack>
      <AfnCloseButton onClick={handleClose} />
    </AfnDialog>
  );
}
