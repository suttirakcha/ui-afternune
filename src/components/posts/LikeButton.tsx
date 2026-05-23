"use client";

import { revalidatePosts } from "@/lib/revalidate";
import { likePost, unlikePost } from "@/services/likes.service";
import { Post } from "@/types/posts.type";
import { User } from "@/types/users.type";
import { handleMessage } from "@/utils/handle-message";
import { useTranslations } from "next-intl";
import { CSSProperties, Fragment, useCallback, useState } from "react";
import { LuHeart } from "react-icons/lu";

interface LikeButtonProps {
  post: Post;
  style: CSSProperties;
  profile?: User;
}

export default function LikeButton({ post, style, profile }: LikeButtonProps) {
  const t = useTranslations();
  const [isClicked, setIsClicked] = useState(false);
  const { _id, likes } = post;

  const isLiked = likes.some(
    (like) => like.post_id === _id && like.user_id === profile?._id
  );

  const handleClickLike = useCallback(async () => {
    setIsClicked(true);
    const response = await likePost(_id);
    if (!response.success) {
      handleMessage(t(response.message));
      setIsClicked(false);
      return;
    }
    revalidatePosts();
    setIsClicked(false);
  }, []);

  const handleClickUnlike = useCallback(async () => {
    setIsClicked(true);
    const response = await unlikePost(_id);
    if (!response.success) {
      handleMessage(t(response.message));
      setIsClicked(false);
      return;
    }
    revalidatePosts();
    setIsClicked(false);
  }, []);

  return (
    <Fragment>
      {isLiked ? (
        <LuHeart
          onClick={handleClickUnlike}
          aria-disabled={isClicked}
          style={{ ...style, fill: "var(--secondary)" }}
        />
      ) : (
        <LuHeart
          onClick={handleClickLike}
          aria-disabled={isClicked}
          style={{ ...style, fill: "" }}
        />
      )}
    </Fragment>
  );
}
