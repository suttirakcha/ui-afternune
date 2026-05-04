"use client";

import MainContainer from "@/components/custom/MainContainer";
import { Grid, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";

type PostLayoutProps = Record<
  "items" | "contacts" | "children",
  Readonly<ReactNode>
>;

export default function PostLayout({
  items,
  contacts,
  children,
}: PostLayoutProps) {
  return (
    <MainContainer animated>
      <Grid gridTemplateColumns="repeat(3, 1fr)" gap={20}>
        <GridItem colSpan={2}>{items}</GridItem>
        <GridItem>{contacts}</GridItem>
      </Grid>
      {children}
    </MainContainer>
  );
}
