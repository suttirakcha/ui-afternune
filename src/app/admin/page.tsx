import { getProfile } from "@/services/auth.service";
import { Role } from "@/types/users.type";
import { handleMessage } from "@/utils/handle-message";
import { Stack } from "@chakra-ui/react";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const profile = await getProfile();

  if (!profile) {
    return redirect("/admin/login");
  }

  if (profile.role === Role.ADMIN) {
    return redirect("/admin/dashboard");
  }

  return redirect("/");
}
