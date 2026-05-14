import { toaster } from "@/components/ui/toaster";

export const handleMessage = (message: string) => {
  toaster.create({
    description: message ?? "Something went wrong",
  });
};
