"use client";

import AfnButton from "@/components/custom/AfnButton";
import { revalidateFollow } from "@/lib/revalidate";
import { followUser } from "@/services/users.service";
import { User } from "@/types/users.type";
import { handleMessage } from "@/utils/handle-message";

interface FollowButtonProps {
  profile: User;
  isAlreadyFollowed?: boolean;
}

export default function FollowButton({
  profile,
  isAlreadyFollowed,
}: FollowButtonProps) {
  const handleFollow = async () => {
    const response = await followUser(profile._id);
    if (response && !response.success) {
      return handleMessage(response.message);
    }
    revalidateFollow();
  };
  return (
    <AfnButton
      px={6}
      fontSize={"16px"}
      onClick={handleFollow}
      disabled={isAlreadyFollowed}
    >
      {isAlreadyFollowed ? "Following" : "Follow"}
    </AfnButton>
  );
}
