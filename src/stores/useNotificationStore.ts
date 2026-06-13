import { toaster } from "@/components/ui/toaster";
import { create } from "zustand";

export const useNotificationStore = create((set, get) => ({
  notify: (message: string) => {
    toaster.create({
      description: message,
    });
  },
}));
