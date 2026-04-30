import { toaster } from "@/components/ui/toaster";

export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    toaster.create({
      description: error.message ?? "Something went wrong",
    });
  }
};
