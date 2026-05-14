"use client";

import AfnTitle from "@/components/custom/AfnTitle";
import Logo from "@/components/custom/Logo";
import AdminLoginForm from "@/components/forms/AdminLoginForm";
import { Stack } from "@chakra-ui/react";
import React from "react";

export default function AdminLoginPage() {
  return (
    <Stack
      display={"flex"}
      height={"100dvh"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"full"}
    >
      <Stack maxWidth={"400px"} width={"full"} alignItems={"center"} gap={4}>
        <Logo />
        <AfnTitle size={"small"}>Login as Administrator</AfnTitle>
        <Stack width={"full"}>
          <AdminLoginForm />
        </Stack>
      </Stack>
    </Stack>
  );
}
