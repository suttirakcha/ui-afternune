import MainContainer from "@/components/custom/MainContainer";
import Topbar from "@/components/custom/Topbar";
import ChatMessageRoom from "@/components/messages/ChatMessageRoom";
import { getChatRoomByReceiverId } from "@/services/messages.service";
import { Stack } from "@chakra-ui/react";

interface MessagePageParams {
  params: Promise<{ id: string }>;
}

export default async function MessagePage({ params }: MessagePageParams) {
  const { id } = await params;
  const chatMessages = await getChatRoomByReceiverId(id);

  return (
    <MainContainer px={0} py={0} gap={0} maxWidth={"none"}>
      <Stack gap={0}>
        <Topbar
          title={chatMessages?.data?.room?.receiver?.username}
          link={"/messages"}
        />
        <ChatMessageRoom
          room={chatMessages?.data?.room}
          messages={chatMessages?.data?.messages}
        />
      </Stack>
    </MainContainer>
  );
}
