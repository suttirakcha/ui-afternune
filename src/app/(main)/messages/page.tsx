import SelectMessages from "@/components/messages/SelectMessages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Messages",
};

export default function MessagesPage() {
  return <SelectMessages />;
}
