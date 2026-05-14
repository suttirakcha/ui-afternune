import PostFormTemplate from "@/components/posts/PostFormTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create post",
};

export default function CreatePostPage() {
  return <PostFormTemplate />;
}
