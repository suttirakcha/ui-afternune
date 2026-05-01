import { Spinner } from "@chakra-ui/react";
import AfnButton from "./AfnButton";

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
  return (
    <AfnButton type="submit" disabled={isSubmitting} display="flex">
      {isSubmitting ? <Spinner /> : null}
      {isSubmitting ? submittingText : submitText}
    </AfnButton>
  );
}
