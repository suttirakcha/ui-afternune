import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface AfnButtonProps extends ButtonProps {
  children: Readonly<ReactNode>;
}

const isOutline = (variant: ButtonProps["variant"]) => variant === "outline";

export default function AfnButton({
  children,
  variant,
  ...props
}: AfnButtonProps) {
  return (
    <Button
      borderRadius="9999px"
      fontWeight={600}
      color={isOutline(variant) ? "var(--primary)" : "white"}
      bgColor={isOutline(variant) ? "white" : "var(--primary)"}
      border={isOutline(variant) ? "1px solid var(--primary)" : "none"}
      _hover={{ bgColor: "var(--light-orange-2)", color: "var(--secondary)" }}
      variant={variant}
      {...props}
    >
      {children}
    </Button>
  );
}
