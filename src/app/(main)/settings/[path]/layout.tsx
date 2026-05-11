"use client";

import AfnTitle from "@/components/custom/AfnTitle";
import MainContainer from "@/components/custom/MainContainer";
import { Grid, GridItem, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

type SettingsLayoutProps = Record<"sidebar" | "children", Readonly<ReactNode>>;

export default function SettingsLayout({
  sidebar,
  children,
}: SettingsLayoutProps) {
  return (
    <MainContainer>
      <Stack gap={10}>
        <AfnTitle>Settings</AfnTitle>
        <Grid gap={"60px"} templateColumns={"repeat(3, 1fr)"}>
          <GridItem colSpan={1}>{sidebar}</GridItem>
          <GridItem colSpan={2}>{children}</GridItem>
        </Grid>
      </Stack>
    </MainContainer>
  );
}
