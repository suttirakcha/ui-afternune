"use client";

import { For } from "@chakra-ui/react";
import PostCard from "./PostCard";
import { ReactNode } from "react";
import { Post } from "@/types/posts.type";

interface PostsListProps {
  posts: Post[];
  fallback?: ReactNode;
}

export default function PostsList({ posts, fallback }: PostsListProps) {
  return (
    <For each={posts} fallback={fallback}>
      {(post: Post) => <PostCard key={post._id} post={post} />}
    </For>
  );
}
