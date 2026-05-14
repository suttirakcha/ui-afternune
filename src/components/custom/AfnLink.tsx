import Link from "next/link";
import { ReactNode } from "react";

interface AfnLinkProps {
  href: string;
  children: Readonly<ReactNode>;
  className?: string;
}

export default function AfnLink(props: AfnLinkProps) {
  const { children, href, className, ...rest } = props;
  return (
    <Link href={href} className={className || "menu-links"} {...rest}>
      {children}
    </Link>
  );
}
