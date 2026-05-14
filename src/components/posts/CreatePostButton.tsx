"use client";

import { Stack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { LuCirclePlus } from "react-icons/lu";

const CREATE_POST_BUTTON_STYLES = {
  border: "2px solid #EA900040",
  borderRadius: "16px",
  padding: "12px",
  flexDirection: "row",
  alignItems: "center",
  color: "var(--secondary)",
  fontWeight: 600,
  gap: 4,
  fontSize: "20px",
  transition: "background-color 150ms",
  cursor: "pointer",
  _hover: {
    backgroundColor: "var(--light-orange)",
  },
};

export default function CreatePostButton() {
  const t = useTranslations();
  return (
    <Link href="/create-post">
      <Stack {...CREATE_POST_BUTTON_STYLES}>
        <LuCirclePlus style={{ width: "32px", height: "32px" }} />
        {t("Create post to share with your friends")}
      </Stack>
    </Link>
  );
}
