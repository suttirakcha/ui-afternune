"use client";

import AfnButton from "@/components/custom/AfnButton";
import { getChatRoomByReceiverId } from "@/services/messages.service";
import { User } from "@/types/users.type";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

interface ProfileMessageButtonProps {
  profile: User;
}

export default function ProfileMessageButton({
  profile,
}: ProfileMessageButtonProps) {
  const t = useTranslations();
  const router = useRouter();
  const handleChatRoom = async () => {
    const roomResponse = await getChatRoomByReceiverId(profile._id);
    if (roomResponse.success) {
      router.push(`/messages/${roomResponse?.data?.room?.receiver_id}`);
    }
  };

  return (
    <AfnButton
      variant="outline"
      px={6}
      fontSize="16px"
      onClick={handleChatRoom}
    >
      {t("Message")}
    </AfnButton>
  );
}
