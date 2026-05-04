"use client";

import { Option } from "@/types/menus.type";
import { For, Menu, MenuRootProps, Portal } from "@chakra-ui/react";
import { Fragment, ReactNode } from "react";

interface AfnMenuProps {
  options: Option[];
  trigger: ReactNode;
  positioning?: MenuRootProps["positioning"];
}

export default function AfnMenu({
  options,
  trigger,
  positioning,
}: AfnMenuProps) {
  return (
    <Menu.Root {...positioning}>
      <Menu.Trigger outline={"none"}>{trigger}</Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content
            border={"2px solid var(--light-orange)"}
            borderRadius={"16px"}
            boxShadow={"0 0 16px var(--light-orange-2)"}
            zIndex={1401}
          >
            <For each={options}>
              {({ menu, onSelect, icon, condition }) => {
                return (
                  <Fragment key={menu}>
                    {condition !== false && (
                      <Menu.Item
                        color={"var(--primary)"}
                        fontWeight={600}
                        fontSize={"18px"}
                        p={4}
                        _hover={{
                          backgroundColor: "var(--light-orange)",
                        }}
                        gap={"12px"}
                        value={menu}
                        onClick={onSelect}
                      >
                        {icon}
                        {menu}
                      </Menu.Item>
                    )}
                  </Fragment>
                );
              }}
            </For>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
