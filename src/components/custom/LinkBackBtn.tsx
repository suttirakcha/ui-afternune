"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { LuArrowLeft } from "react-icons/lu";

interface LinkBackBtnProps extends PropsWithChildren {
  href: string;
}

export default function LinkBackBtn({ href, children }: LinkBackBtnProps) {
  return (
    <Link href={href} style={{ width: "fit-content" }}>
      <Flex
        alignItems="center"
        gap={1}
        transition="gap .2s"
        className="group"
        _hover={{ gap: 4 }}
      >
        <Box
          transition="background-color .2s"
          _groupHover={{
            backgroundColor: "var(--light-orange)",
          }}
          p={2}
          borderRadius="9999px"
        >
          <LuArrowLeft />
        </Box>
        {children}
      </Flex>
    </Link>
  );
}
