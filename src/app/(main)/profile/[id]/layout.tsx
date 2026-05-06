import MainContainer from "@/components/custom/MainContainer";
import { Grid, GridItem, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

type ProfileLayoutProps = Record<
  "detail" | "posts" | "interests",
  Readonly<ReactNode>
>;

export default function ProfileLayout({
  detail,
  posts,
  interests,
}: ProfileLayoutProps) {
  return (
    <MainContainer>
      <Stack gap={10}>
        {detail}
        <Stack gap={10}>
          <Grid
            templateColumns="repeat(1, 1fr)"
            gap={20}
            xl={{
              gridTemplateColumns: "repeat(3, 1fr)",
            }}
          >
            <GridItem colSpan={1} xl={{ gridColumn: "span 2" }}>
              {posts}
            </GridItem>
            <GridItem>{interests}</GridItem>
          </Grid>
        </Stack>
      </Stack>
    </MainContainer>
  );
}
