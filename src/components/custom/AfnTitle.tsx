"use client";

import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

const titleSizes = {
  small: "1.5rem",
  medium: "2rem",
  large: "2.5rem",
};

interface AfnTitleProps {
  size?: keyof typeof titleSizes;
  children: Readonly<ReactNode>;
}

export default function AfnTitle({ size, children }: AfnTitleProps) {
  const fontSize = titleSizes[size ?? "medium"];

  return (
    <Text fontSize={fontSize} color={"var(--secondary)"}>
      {children}
    </Text>
  );
}
