"use client";

import Sidebar from "@/components/custom/Sidebar";
import CreateProfileDialog from "@/components/dialogs/CreateProfileDialog";
import { Box, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <Box className="animated">
      <Sidebar />
      <Stack
        maxWidth="100dvw"
        lg={{ maxWidth: "calc(100dvw - 300px)" }}
        marginLeft="auto"
      >
        {children}
      </Stack>
      <CreateProfileDialog />
    </Box>
  );
}
