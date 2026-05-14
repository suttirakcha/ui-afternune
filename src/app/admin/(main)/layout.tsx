import AdminSidebar from "@/components/custom/AdminSidebar";
import MainContainer from "@/components/custom/MainContainer";
import { getProfile } from "@/services/auth.service";
import { Role } from "@/types/users.type";
import { HStack, Stack } from "@chakra-ui/react";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const profile = await getProfile();

  if (!profile) {
    return redirect("/admin/login");
  }

  if (profile.role !== Role.ADMIN) {
    return redirect("/");
  }
  return (
    <HStack>
      <AdminSidebar />
      <Stack marginLeft={"300px"} width={"full"}>
        <MainContainer>{children}</MainContainer>
      </Stack>
    </HStack>
  );
}
