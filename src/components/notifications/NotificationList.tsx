"use client";

import AfnTitle from "@/components/custom/AfnTitle";
import MainContainer from "@/components/custom/MainContainer";
import { Notification } from "@/types/notifications.type";
import { For, Stack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

interface NotificationListProps {
  notifications: Notification[];
}

export default function NotificationList({
  notifications,
}: NotificationListProps) {
  const t = useTranslations();
  return (
    <MainContainer animated>
      <Stack gap={10}>
        <AfnTitle>{t("Notifications")}</AfnTitle>
        <Stack>
          <For each={notifications}>
            {(notification) => (
              <Text key={notification._id}>{notification.message}</Text>
            )}
          </For>
        </Stack>
      </Stack>
    </MainContainer>
  );
}
