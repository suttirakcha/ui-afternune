"use client";

import { Spinner } from "@chakra-ui/react";
import AfnButton from "./AfnButton";
import { useTranslations } from "next-intl";

interface SubmitButtonProps {
  isSubmitting: boolean;
  submitText: string;
  submittingText: string;
}

export default function SubmitButton({
  isSubmitting,
  submitText,
  submittingText,
}: SubmitButtonProps) {
  const t = useTranslations();
  return (
    <AfnButton type="submit" disabled={isSubmitting} display="flex">
      {isSubmitting ? <Spinner /> : null}
      {t(isSubmitting ? submittingText : submitText)}
    </AfnButton>
  );
}
