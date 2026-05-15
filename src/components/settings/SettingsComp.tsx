"use client";

import AfnTitle from "@/components/custom/AfnTitle";
import { Menu } from "@/types/menus.type";
import { Stack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

interface SettingsCompProps {
  menu: Menu;
}

export default function SettingsComp({ menu }: SettingsCompProps) {
  const t = useTranslations();
  const { title, component, description } = menu;
  return (
    <Stack gap={6}>
      <AfnTitle size={"small"}>{t(title)}</AfnTitle>
      {description && <Text>{description}</Text>}
      {component}
    </Stack>
  );
}
