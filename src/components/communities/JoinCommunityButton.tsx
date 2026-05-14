"use client";

import AfnButton from "@/components/custom/AfnButton";
import { revalidateCommunity } from "@/lib/revalidate";
import { joinCommunity } from "@/services/communities.service";
import { Community } from "@/types/communities.type";
import { handleMessage } from "@/utils/handle-message";
import { useTranslations } from "next-intl";

interface JoinCommunityButtonProps {
  isAlreadyJoined: boolean;
  community: Community;
}

export default function JoinCommunityButton({
  isAlreadyJoined,
  community,
}: JoinCommunityButtonProps) {
  const t = useTranslations();
  const handleJoin = async () => {
    const response = await joinCommunity(community._id);
    if (!response.success) {
      return handleMessage(response.message);
    }
    revalidateCommunity();
  };
  return (
    <AfnButton
      px={6}
      fontSize={"16px"}
      onClick={handleJoin}
      disabled={isAlreadyJoined}
    >
      {t(isAlreadyJoined ? "Joined" : "Join")}
    </AfnButton>
  );
}
