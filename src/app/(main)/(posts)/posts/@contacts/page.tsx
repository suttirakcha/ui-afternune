import ContactList from "@/components/users/ContactList";
import { getProfile } from "@/services/auth.service";

export default async function ContactPage() {
  const profile = await getProfile();

  return <ContactList profile={profile} />;
}
