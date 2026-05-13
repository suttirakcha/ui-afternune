"use client";

import { Menu } from "@/types/menus.type";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

interface MenuLinksProps {
  menus: Menu[];
  animated?: boolean;
}

export default function MenuLinks({ menus, animated }: MenuLinksProps) {
  const t = useTranslations();
  const pathname = usePathname();
  const isPathnameMatch = (path: string) => {
    const firstPathname = pathname.split("/");
    return firstPathname[1] === path;
  };

  return (
    <Fragment>
      {menus.map((menu, index) => {
        const menuStyles = {
          animation: animated
            ? `fade-in-menu .75s ${250 * (index + 0.5)}ms forwards`
            : "none",
          opacity: animated ? 0 : 1,
          width: "fit-content",
          fontSize: "1.25rem",
        };
        return (
          <Link
            href={menu.href}
            key={menu.id}
            className={`menu-links ${isPathnameMatch(menu.id) ? "active" : ""}`}
            style={menuStyles}
          >
            {menu.icon}
            {t(menu.title)}
          </Link>
        );
      })}
    </Fragment>
  );
}
