import LanguageSwitcherSelect from "@/components/custom/LanguageSwitcherSelect";
import Logo from "@/components/custom/Logo";
import { Stack } from "@chakra-ui/react";

interface MobileTopbarProps {
  locale: string;
}

export default function MobileTopbar({ locale }: MobileTopbarProps) {
  const topbarStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    px: 6,
    py: 2,
    zIndex: 2,
    boxShadow: "var(--main-box-shadow)",
    backgroundColor: "white",
    position: "fixed",
    insetX: 0,
    top: 0,
    lg: {
      display: "none",
    },
  };
  return (
    <Stack {...topbarStyles}>
      <Logo fontSize="4xl" lineHeight="36px" />
      <LanguageSwitcherSelect
        defaultLocale={locale}
        width="120px"
        lg={{ width: "max-content" }}
      />
    </Stack>
  );
}
