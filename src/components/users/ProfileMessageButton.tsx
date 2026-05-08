"use client";

import AfnButton from "@/components/custom/AfnButton";
import { User } from "@/types/users.type";
import { useRouter } from "next/navigation";

interface ProfileMessageButtonProps {
  profile: User;
}

export default function ProfileMessageButton({
  profile,
}: ProfileMessageButtonProps) {
  const router = useRouter();
  return (
    <AfnButton
      variant="outline"
      px={6}
      fontSize="16px"
      onClick={() => router.push(`/messages/${profile.username}`)}
    >
      Message
    </AfnButton>
  );
}
