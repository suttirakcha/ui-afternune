"use client";

import LinkBackBtn from "@/components/custom/LinkBackBtn";
import MainContainer from "@/components/custom/MainContainer";
import { AuthType } from "@/types/auth.type";
import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const authTypes = [
    {
      path: "/login",
      title: AuthType.LOGIN,
    },
    {
      path: "/register",
      title: AuthType.REGISTER,
    },
    {
      path: "/forgot-password",
      title: AuthType.RESET_PASSWORD,
    },
  ];

  const { title } = authTypes.find((type) => type.path === pathname)!;

  return (
    <MainContainer
      animated
      maxWidth="none"
      alignItems="center"
      justifyContent="center"
      px={0}
      py={0}
      mt={0}
    >
      <Grid
        templateColumns={"repeat(2, 1fr)"}
        background={
          "linear-gradient(to right, var(--light-orange-2) 30%, white 50%)"
        }
      >
        <GridItem
          height="100dvh"
          margin="auto"
          display="flex"
          alignItems="center"
        >
          <Text
            fontFamily="Send Flowers"
            fontSize="60px"
            fontWeight={500}
            WebkitTextStroke="1px white"
            color="white"
            width="400px"
            lineHeight="72px"
          >
            Let's build a good society with others
          </Text>
        </GridItem>
        <GridItem p={10} margin="auto" width="full">
          <Stack gap={10} maxWidth={600}>
            <LinkBackBtn href="/">Back to homepage</LinkBackBtn>
            <Stack gap={6}>
              <Text fontSize={24} color="var(--secondary)">
                {title}
              </Text>
              {children}
            </Stack>
          </Stack>
        </GridItem>
      </Grid>
    </MainContainer>
  );
}
