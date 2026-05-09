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
    <MainContainer animated height={0}>
      <Grid
        gridTemplateColumns="repeat(1, 1fr)"
        gap={20}
        xl={{ gridTemplateColumns: "repeat(3, 1fr)" }}
      >
        <GridItem colSpan={1} xl={{ gridColumn: "span 2" }}>
          {items}
        </GridItem>
        <GridItem>{contacts}</GridItem>
      </Grid>
      {children}
    </MainContainer>
  );
}
