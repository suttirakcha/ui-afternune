import { ReactNode } from "react";

export type Menu = {
  id: string;
  title: string;
  description?: string;
  href: string;
  icon?: ReactNode;
  component?: ReactNode;
};

export type Option = {
  menu: string;
  onSelect: () => void;
  icon?: ReactNode;
  condition?: boolean;
};

export type ListType = {
  label: string;
  value: string;
};
