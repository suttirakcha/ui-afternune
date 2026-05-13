"use client";

import AfnTitle from "@/components/custom/AfnTitle";
import MainContainer from "@/components/custom/MainContainer";
import { Box, Stack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import Error from "next/error";
import { useEffect } from "react";

interface PostErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function PostError({ error, reset }: PostErrorProps) {
  const t = useTranslations();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <MainContainer justifyContent={"center"}>
      <Stack gap={8} textAlign={"center"} margin={"auto"}>
        <Text
          fontFamily={"Send Flowers"}
          fontSize={"72px"}
          fontWeight={500}
          WebkitTextStroke={"1px var(--foreground)"}
        >
          Something went wrong
        </Text>
        <Box width={"540px"} marginX={"auto"}>
          <AfnTitle size={"small"}>
            {t(
              "We're sorry, but there was a technical issue while loading the content"
            )}
          </AfnTitle>
        </Box>
        <Box display={"inline-flex"} justifyContent={"center"}>
          <Text className="menu-links" onClick={reset}>
            {t("Refresh the page")}
          </Text>
        </Box>
      </Stack>
    </MainContainer>
  );
}
