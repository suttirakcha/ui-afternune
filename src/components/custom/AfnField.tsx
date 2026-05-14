"use client";

import { Field, FieldRootProps, VStack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

interface AfnFieldProps extends FieldRootProps {
  label?: string;
  children: ReactNode;
  touched?: boolean;
  error?: string;
  helper?: string;
  htmlFor?: string;
}

export default function AfnField({
  label,
  children,
  error,
  helper,
  htmlFor,
  touched,
  invalid,
  ...props
}: AfnFieldProps) {
  const t = useTranslations();
  const showError = touched && !!error;
  const isInvalid = invalid ?? showError;

  return (
    <Field.Root {...props} invalid={isInvalid}>
      {label && (
        <Field.Label fontSize={16} fontWeight={600} htmlFor={htmlFor}>
          {t(label)}
        </Field.Label>
      )}
      <VStack w="100%" alignItems="flex-start">
        {children}
        {showError && <Field.ErrorText>{t(error)}</Field.ErrorText>}
        {helper && (
          <Field.HelperText
            color="var(--secondary)"
            fontSize={"14px"}
            fontWeight={600}
          >
            {t(helper)}
          </Field.HelperText>
        )}
      </VStack>
    </Field.Root>
  );
}
