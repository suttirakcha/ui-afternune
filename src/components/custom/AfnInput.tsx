"use client";

import { Box, Input, InputProps, Stack } from "@chakra-ui/react";
import Image from "next/image";
import AfnCloseButton from "@/components/custom/AfnCloseButton";
import { PasswordInput } from "../ui/password-input";
import InputFocusLine from "@/components/custom/InputFocusLine";

export type AfnInputProps = (
  | { type: "file"; previewUrl?: string; onReset: () => void }
  | { type?: Exclude<InputProps["type"], "file">; previewUrl?: null }
) &
  Omit<InputProps, "type"> & {
    error?: boolean;
  };

const BASE_INPUT_PROPS = {
  borderRadius: "0",
  borderColor: "var(--light-orange-2)!",
  border: "none",
  fontWeight: 500,
  _placeholder: { color: "var(--main-gray)" },
} satisfies InputProps;

export default function AfnInput({
  error = false,
  previewUrl,
  onReset,
  ...rest
}: AfnInputProps) {
  if (rest.type === "file") {
    return (
      <Stack gap={4} width="full">
        {previewUrl && (
          <Box
            borderRadius="16px"
            overflow="hidden"
            position="relative"
            className="group"
            {...rest}
          >
            <Image
              src={previewUrl}
              alt="afternune-image"
              width={600}
              height={600}
            />
            <AfnCloseButton
              onClick={onReset}
              opacity="0.4"
              _groupHover={{ opacity: "1" }}
            />
          </Box>
        )}
        <label htmlFor={rest.name}>
          <Stack gap={4}>
            {!previewUrl && (
              <Stack
                borderRadius="16px"
                border="2px dashed"
                borderColor={
                  error
                    ? "var(--chakra-colors-red-emphasized)"
                    : "var(--light-orange-2)"
                }
                textAlign="center"
                py={40}
                cursor="pointer"
              >
                Upload image here
              </Stack>
            )}
            <Input
              id={rest.name}
              display="none"
              {...BASE_INPUT_PROPS}
              {...rest}
            />
          </Stack>
        </label>
      </Stack>
    );
  }

  return (
    <Stack position="relative" gap={0} width="100%">
      {rest.type === "password" ? (
        <PasswordInput
          {...BASE_INPUT_PROPS}
          {...rest}
          focusRing="none"
          className="peer"
        />
      ) : (
        <Input
          {...BASE_INPUT_PROPS}
          {...rest}
          focusRing="none"
          className="peer"
        />
      )}
      <InputFocusLine error={error} />
    </Stack>
  );
}
