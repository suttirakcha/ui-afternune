import AfnTitle from "@/components/custom/AfnTitle";
import MainContainer from "@/components/custom/MainContainer";
import { Stack, Text } from "@chakra-ui/react";

export default function NotificationsPage() {
  return (
    <MainContainer animated>
      <Stack gap={10}>
        <AfnTitle>Notifications</AfnTitle>
        <Stack>
          <Text>You have new messages from marktest:</Text>
        </Stack>
      </Stack>
    </MainContainer>
  );
}
