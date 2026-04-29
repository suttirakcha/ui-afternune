"use client";

import AfnTitle from "@/components/custom/AfnTitle";
import Loading from "@/components/custom/Loading";
import Logo from "@/components/custom/Logo";
import { Stack, VStack } from "@chakra-ui/react";

export default function RootLoading() {
  return (
    <Stack height={"100dvh"} justifyContent={"center"}>
      <VStack justifyContent={"center"} gap={8}>
        <Logo />
        <AfnTitle size={"small"}>Let&apos;s have a chat together!</AfnTitle>
        <Loading />
      </VStack>
    </Stack>
  );
}
