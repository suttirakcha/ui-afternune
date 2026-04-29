"use client";

import type { ButtonProps, InputProps, StackProps } from "@chakra-ui/react";
import {
  Box,
  HStack,
  Input,
  Stack,
  mergeRefs,
  useControllableState,
} from "@chakra-ui/react";
import * as React from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import AfnButton from "@/components/custom/AfnButton";

export interface PasswordVisibilityProps {
  defaultVisible?: boolean;
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  visibilityIcon?: { on: React.ReactNode; off: React.ReactNode };
}

export interface PasswordInputProps
  extends InputProps,
    PasswordVisibilityProps {}

export const PasswordInput = React.forwardRef<
  HTMLInputElement,
  PasswordInputProps
>(function PasswordInput(props, ref) {
  const {
    defaultVisible,
    visible: visibleProp,
    onVisibleChange,
    visibilityIcon = {
      on: <LuEye />,
      off: <LuEyeOff />,
    },
    ...rest
  } = props;

  const [visible, setVisible] = useControllableState({
    value: visibleProp,
    defaultValue: defaultVisible || false,
    onChange: onVisibleChange,
  });

  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <Input
        {...rest}
        ref={mergeRefs(ref, inputRef)}
        type={visible ? "text" : "password"}
        className={rest.className ?? "peer"}
      />
      <VisibilityTrigger
        disabled={rest.disabled}
        onPointerDown={(e) => {
          if (rest.disabled) return;
          if (e.button !== 0) return;
          e.preventDefault();
          setVisible(!visible);
        }}
      >
        {visible ? visibilityIcon.off : visibilityIcon.on}
      </VisibilityTrigger>
    </>
  );
});

const VisibilityTrigger = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function VisibilityTrigger(props, ref) {
    const showPasswordBtnStyles = {
      bgColor: "transparent!",
      color: "var(--primary)",
      width: 8,
      height: 8,
      p: 0,
    };

    return (
      <HStack gap={0} position={"absolute"} right={0}>
        <AfnButton
          {...showPasswordBtnStyles}
          {...props}
          aria-label="Toogle password"
        >
          {props.children}
        </AfnButton>
      </HStack>
    );
  }
);

interface PasswordStrengthMeterProps extends StackProps {
  max?: number;
  value: number;
}

export const PasswordStrengthMeter = React.forwardRef<
  HTMLDivElement,
  PasswordStrengthMeterProps
>(function PasswordStrengthMeter(props, ref) {
  const { max = 4, value, ...rest } = props;

  const percent = (value / max) * 100;
  const { label, colorPalette } = getColorPalette(percent);

  return (
    <Stack align="flex-end" gap="1" ref={ref} {...rest}>
      <HStack width="full" {...rest}>
        {Array.from({ length: max }).map((_, index) => (
          <Box
            key={index}
            height="1"
            flex="1"
            rounded="sm"
            data-selected={index < value ? "" : undefined}
            layerStyle="fill.subtle"
            colorPalette="gray"
            _selected={{
              colorPalette,
              layerStyle: "fill.solid",
            }}
          />
        ))}
      </HStack>
      {label && <HStack textStyle="xs">{label}</HStack>}
    </Stack>
  );
});

function getColorPalette(percent: number) {
  switch (true) {
    case percent < 33:
      return { label: "Low", colorPalette: "red" };
    case percent < 66:
      return { label: "Medium", colorPalette: "orange" };
    default:
      return { label: "High", colorPalette: "green" };
  }
}
