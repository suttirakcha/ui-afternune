import AfnDialog from "@/components/custom/AfnDialog";
import CreateProfileForm from "@/components/forms/CreateProfileForm";
import { getProfile } from "@/services/auth.service";
import { User } from "@/types/users.type";
import { Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function CreateProfileDialog() {
  const [profile, setProfile] = useState<User | null>(null);
  const [isCreateProfileModalOpen, setIsCreateProfileModalOpen] = useState({
    open: false,
  });

  const handleFetchProfile = async () => {
    const response = await getProfile();
    setProfile(response);
  };

  const handleSkip = () => {
    setIsCreateProfileModalOpen({ open: false });
  };

  useEffect(() => {
    handleFetchProfile();
  }, []);

  useEffect(() => {
    if (profile?.is_first_time) {
      setIsCreateProfileModalOpen({ open: true });
    }
  }, [profile?.is_first_time]);

  return (
    <AfnDialog
      open={isCreateProfileModalOpen.open}
      onOpenChange={setIsCreateProfileModalOpen}
      closeOnEscape={false}
      closeOnInteractOutside={false}
    >
      <Stack w={"full"} gap={6}>
        <Text fontSize={24} color="var(--secondary)">
          Tell us about yourself
        </Text>
        <CreateProfileForm onSkip={handleSkip} />
      </Stack>
    </AfnDialog>
  );
}
