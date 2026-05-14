"use client";

import AfnSelect from "@/components/custom/AfnSelect";
import { changeLanguage } from "@/services/language.service";
import { ListType } from "@/types/menus.type";
import { SelectValueChangeDetails } from "@chakra-ui/react";

interface LanguageSwitcherSelectProps {
  defaultLocale: string;
}

const LANGUAGE_OPTIONS = [
  { label: "English", value: "en" },
  { label: "ภาษาไทย", value: "th" },
  // { label: "中文", value: "zh-cn" },
];

export default function LanguageSwitcherSelect({
  defaultLocale,
}: LanguageSwitcherSelectProps) {
  const handleSwitchLanguage = (
    details: SelectValueChangeDetails<ListType>
  ) => {
    changeLanguage(details.value[0]);
  };

  return (
    <AfnSelect
      defaultValue={[defaultLocale]}
      options={LANGUAGE_OPTIONS}
      onValueChange={handleSwitchLanguage}
    />
  );
}
