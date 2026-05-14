import Sidebar from "@/components/custom/Sidebar";
import CreateProfileDialog from "@/components/dialogs/CreateProfileDialog";
import { Box, Stack } from "@chakra-ui/react";
import { cookies } from "next/headers";
import { ReactNode } from "react";

export default async function MainLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value ?? "en";
  return (
    <Box className="animated">
      <Sidebar locale={locale} />
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
