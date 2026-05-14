import { Badge, BadgeProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface AfnBadgeProps extends BadgeProps {
  children: ReactNode;
}

const BADGE_STYLES = {
  px: 6,
  py: 2,
  backgroundColor: "var(--light-orange)",
  color: "var(--primary)",
  borderRadius: "9999px",
  fontSize: "16px",
  fontWeight: 600,
  width: "fit",
  cursor: "pointer",
};

export default function AfnBadge({ children, ...props }: AfnBadgeProps) {
  return (
    <Badge {...BADGE_STYLES} {...props}>
      {children}
    </Badge>
  );
}
