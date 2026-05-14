import LanguageSwitcherSelect from "@/components/custom/LanguageSwitcherSelect";
import { cookies } from "next/headers";

export default async function LanguageSwitcherWrapper() {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value ?? "en";
  return <LanguageSwitcherSelect defaultLocale={locale} />;
}
