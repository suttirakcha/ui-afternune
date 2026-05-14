"use client";

import AfnTitle from "@/components/custom/AfnTitle";
import { User } from "@/types/users.type";
import { useTranslations } from "next-intl";

interface GreetingsProps {
  user: User;
}

export default function Greetings({ user }: GreetingsProps) {
  const t = useTranslations();
  return (
    <AfnTitle>
      {user
        ? t("How have you been", {
            username: user.username,
          })
        : t("Welcome")}
    </AfnTitle>
  );
}
