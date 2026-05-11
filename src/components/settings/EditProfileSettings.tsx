import EditProfileForm from "@/components/forms/EditProfileForm";
import { getProfile } from "@/services/auth.service";

export default async function EditProfileSettings() {
  const profile = await getProfile();
  return <EditProfileForm profile={profile} />;
}
