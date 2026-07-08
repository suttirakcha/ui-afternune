import { toaster } from "@/components/ui/toaster";
import { notifyUser } from "@/services/notifications.service";
import { create } from "zustand";

type NotificationStore = {
  notify: (
    userId: string,
    message: string,
    onClick?: () => void
  ) => Promise<void>;
};

export const useNotificationStore = create<NotificationStore>((set, get) => ({
  notify: async (userId, message, onClick) => {
    const response = await notifyUser(userId, { message });
    toaster.create({
      title: "You have a new notification",
      description: response.message,
      closable: true,
      ...(onClick
        ? {
            action: {
              label: "View",
              onClick,
            },
          }
        : {}),
    });
  },
}));
