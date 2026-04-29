"use client";

import MainContainer from "@/components/custom/MainContainer";
import { Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <MainContainer animated justifyContent={"center"}>
      <Stack h={"100%"} justifyContent={"center"} alignItems={"center"} gap={8}>
        <Text
          fontFamily={"Send Flowers"}
          fontSize={"100px"}
          fontWeight={500}
          WebkitTextStroke={"2px var(--foreground)"}
        >
          Content not found
        </Text>
        <Text
          fontSize={"24px"}
          color={"var(--secondary)"}
          textAlign={"center"}
          width={"480px"}
        >
          Sorry, it looks like the content you are looking for is not found.
        </Text>
        <Link href="/" className="menu-links">
          Go to Homepage
        </Link>
      </Stack>
    </MainContainer>
  );
}
