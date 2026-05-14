import SelectMessages from "@/components/messages/SelectMessages";
import { Stack, Text } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Messages",
};

export default function MessagesPage() {
  return <SelectMessages />;
}
