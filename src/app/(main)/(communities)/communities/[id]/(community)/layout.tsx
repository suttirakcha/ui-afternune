import MainContainer from "@/components/custom/MainContainer";
import { Grid, GridItem, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

type ProfileLayoutProps = Record<
  "detail" | "members" | "events",
  Readonly<ReactNode>
>;

export default function SingleCommunityLayout({
  detail,
  events,
  members,
}: ProfileLayoutProps) {
  return (
    <MainContainer>
      <Stack gap={10}>
        {detail}
        <Stack gap={10}>
          <Grid
            gridTemplateColumns="repeat(1, 1fr)"
            gap={20}
            xl={{
              gridTemplateColumns: "repeat(3, 1fr)",
            }}
          >
            <GridItem colSpan={1} xl={{ gridColumn: "span 2" }}>
              {events}
            </GridItem>
            <GridItem>{members}</GridItem>
          </Grid>
        </Stack>
      </Stack>
    </MainContainer>
  );
}
