import AfnTitle from "@/components/custom/AfnTitle";
import MainContainer from "@/components/custom/MainContainer";
import ChatRoomList from "@/components/messages/ChatRoomList";
import { Grid, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";

interface MessageLayoutProps {
  children: ReactNode;
}

export default function MessageLayout({ children }: MessageLayoutProps) {
  return (
    <MainContainer animated px={"0"} py={"0"} gap={"0"} maxWidth={"none"}>
      <Grid lg={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        <GridItem px={8} py={4} gap={4} display="flex" flexDirection="column">
          <AfnTitle size="small">Messages</AfnTitle>
          <ChatRoomList />
        </GridItem>
        <GridItem colSpan={1} lg={{ gridColumn: "span 2" }}>
          {children}
        </GridItem>
      </Grid>
    </MainContainer>
  );
}
