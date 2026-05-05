import AvatarUser from "@/components/avatar/AvatarUser";
import AfnButton from "@/components/custom/AfnButton";
import AfnMenu from "@/components/custom/AfnMenu";
import { Option } from "@/types/menus.type";
import { User } from "@/types/users.type";

interface SidebarLoginProps {
  profile: User | null;
  onLoginModal: (val: boolean) => void;
  options: Option[];
}

export default function SidebarLogin({
  profile,
  onLoginModal,
  options,
}: SidebarLoginProps) {
  if (!profile) {
    return <AfnButton onClick={() => onLoginModal(true)}>Login</AfnButton>;
  }
  return <AfnMenu trigger={<AvatarUser user={profile} />} options={options} />;
}
