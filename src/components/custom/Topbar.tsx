"use client";

import { Box, Stack, StackProps } from "@chakra-ui/react";
import AfnTitle from "./AfnTitle";
import { LuArrowLeft } from "react-icons/lu";
import Link from "next/link";
import { useEffect, useState } from "react";

interface TopbarProps extends StackProps {
  title: string;
  link?: string;
  isShowWhenScroll?: boolean;
}

export default function Topbar({
  title,
  link,
  isShowWhenScroll,
  ...props
}: TopbarProps) {
  const [isHeaderUserShow, setIsHeaderUserShow] = useState(false);
  const TOPBAR_STYLES = {
    boxShadow: "var(--main-topbar-shadow)",
    backgroundColor: "var(--light-orange)",
    px: 8,
    py: 4,
    gap: 4,
    flexDirection: "row",
    alignItems: "center",
    top: isHeaderUserShow ? 0 : "-200px",
    display: "none",
    md: { display: "block" },
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      const handleScroll = () => {
        setIsHeaderUserShow(
          (isShowWhenScroll && document.documentElement.scrollTop > 200)!
        );
      };

      document.addEventListener("scroll", handleScroll);

      return () => document.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <Stack {...TOPBAR_STYLES} {...props}>
      {link && (
        <Link href={link}>
          <Box fontSize={"24px"} color={"var(--secondary)"} cursor={"pointer"}>
            <LuArrowLeft />
          </Box>
        </Link>
      )}
      <AfnTitle size={"small"}>{title}</AfnTitle>
    </Stack>
  );
}
