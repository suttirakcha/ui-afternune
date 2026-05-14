import CommunityFormTemplate from "@/components/communities/CommunityFormTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create community",
};

export default function CreateCommunityPage() {
  return <CommunityFormTemplate />;
}
