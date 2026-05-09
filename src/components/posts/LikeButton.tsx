"use client";

import { revalidatePosts } from "@/lib/revalidate";
import { likePost, unlikePost } from "@/services/likes.service";
import { Post } from "@/types/posts.type";
import { User } from "@/types/users.type";
import { CSSProperties, Fragment, useCallback } from "react";
import { LuHeart } from "react-icons/lu";

interface LikeButtonProps {
  post: Post;
  style: CSSProperties;
  profile: User;
}

export default function LikeButton({ post, style, profile }: LikeButtonProps) {
  const { _id, likes } = post;

  const isLiked = likes.some(
    (like) => like.post_id === _id && like.user_id === profile?._id
  );

  const handleClickLike = useCallback(async () => {
    const response = await likePost(_id);
    revalidatePosts();
  }, []);

  const handleClickUnlike = useCallback(async () => {
    const response = await unlikePost(_id);
    revalidatePosts();
  }, []);

  return (
    <Fragment>
      {isLiked ? (
        <LuHeart
          onClick={handleClickUnlike}
          style={{ ...style, fill: "var(--secondary)" }}
        />
      ) : (
        <LuHeart onClick={handleClickLike} style={{ ...style, fill: "" }} />
      )}
    </Fragment>
  );
}
