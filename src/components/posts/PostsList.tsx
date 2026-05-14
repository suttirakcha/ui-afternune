"use client";

import { CssProperties, For, Stack } from "@chakra-ui/react";
import PostCard from "./PostCard";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Post } from "@/types/posts.type";
import { User } from "@/types/users.type";
import { getPosts } from "@/services/posts.service";
import CreatePostButton from "@/components/posts/CreatePostButton";
import { DataLoading } from "@/components/custom/DataLoading";

interface PostsListProps {
  posts: Post[];
  fallback?: ReactNode;
  profile: User;
  limit?: number;
  allowToCreatePost?: boolean;
}

const POST_ITEMS_STYLES = {
  gap: 6,
  width: "full",
  marginBlock: "auto",
  paddingBottom: 10,
} satisfies CssProperties;

export const POSTS_LIMIT = 2;

export default function PostsList({
  posts,
  fallback,
  profile,
  allowToCreatePost,
}: PostsListProps) {
  const [items, setItems] = useState(posts);
  const [limit, setLimit] = useState(POSTS_LIMIT);
  const [isLoading, setIsLoading] = useState(false);
  const isAllLoaded = limit > items.length;

  const loadingRef = useRef(null);

  const handleLoadMore = useCallback(async () => {
    if (isLoading || isAllLoaded) return;
    setIsLoading(true);
    setLimit((prev) => prev + POSTS_LIMIT);
    const response = await getPosts({
      limit: limit * POSTS_LIMIT,
    });
    setItems(response);
    setIsLoading(false);
  }, [isLoading, isAllLoaded, limit]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          handleLoadMore();
        }
      },
      { threshold: 1.0 }
    );

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => observer.disconnect();
  }, [isLoading, isAllLoaded]);

  return (
    <Stack {...POST_ITEMS_STYLES}>
      {allowToCreatePost && <CreatePostButton />}
      <For each={items} fallback={fallback}>
        {(post: Post) => (
          <PostCard key={post._id} post={post} profile={profile} />
        )}
      </For>
      {!isAllLoaded && <DataLoading ref={loadingRef} onLoad={handleLoadMore} />}
    </Stack>
  );
}
