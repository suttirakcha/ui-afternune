"use client";

import AfnCheckboxBadges from "@/components/custom/AfnCheckoutBadges";
import { Interests } from "@/types/users.type";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface ManageInterestsCheckboxProps {
  label?: string;
  onValueChange: (values: string[]) => void;
  defaultValues?: string[];
}

const interests: Interests[] = Object.values(Interests);

export const interestsList = interests.map((interest) => ({
  label: interest,
  value: interest,
}));

export default function ManageInterestsCheckbox({
  label,
  onValueChange,
  defaultValues = [],
}: ManageInterestsCheckboxProps) {
  const t = useTranslations();
  const [selected, setSelected] = useState(defaultValues);

  const handleValueChange = (values: string[]) => {
    setSelected(values);
    onValueChange?.(values);
  };

  return (
    <AfnCheckboxBadges
      items={interestsList}
      label={t(label ?? "")}
      value={selected}
      onValueChange={handleValueChange}
    />
  );
}
