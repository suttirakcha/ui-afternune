"use client";

import { Text } from "@chakra-ui/react";

const POST_FALLBACK_STYLES = {
  fontSize: "18px",
  textAlign: "center",
};

export function PostFallback() {
  return <Text {...POST_FALLBACK_STYLES}>Hmm, there are no posts here...</Text>;
}
