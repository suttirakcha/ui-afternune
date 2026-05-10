import { Stack, Text } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Messages",
};

export default function MessagesPage() {
  return (
    <Stack alignItems="center" justifyContent="center" height="100dvh">
      <Text fontSize={"18px"} fontWeight={600}>
        Please select the conversation
      </Text>
    </Stack>
  );
}
