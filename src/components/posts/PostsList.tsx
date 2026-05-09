import { For } from "@chakra-ui/react";
import PostCard from "./PostCard";
import { ReactNode } from "react";
import { Post } from "@/types/posts.type";
import { User } from "@/types/users.type";

interface PostsListProps {
  posts: Post[];
  fallback?: ReactNode;
  profile: User;
}

export default function PostsList({
  posts,
  fallback,
  profile,
}: PostsListProps) {
  return (
    <For each={posts} fallback={fallback}>
      {(post: Post) => (
        <PostCard key={post._id} post={post} profile={profile} />
      )}
    </For>
  );
}
