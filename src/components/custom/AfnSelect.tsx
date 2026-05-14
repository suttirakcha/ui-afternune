"use client";

import { ListType } from "@/types/menus.type";
import {
  createListCollection,
  Portal,
  Select,
  SelectValueChangeDetails,
} from "@chakra-ui/react";

interface AfnSelectProps {
  options: ListType[];
  placeholder?: string;
  onValueChange: (details: SelectValueChangeDetails<ListType>) => void;
  defaultValue?: string[];
}

export default function AfnSelect({
  options,
  placeholder,
  onValueChange,
  defaultValue,
}: AfnSelectProps) {
  const collections = createListCollection({
    items: options,
  });

  return (
    <Select.Root
      defaultValue={defaultValue}
      collection={collections}
      onValueChange={onValueChange}
    >
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger
          p={3}
          fontSize="16px"
          fontWeight={600}
          border="2px solid var(--light-orange)"
          borderRadius="16px"
          transition="box-shadow .2s"
          _open={{
            boxShadow: "0 0 8px var(--light-orange-2)",
          }}
        >
          <Select.ValueText placeholder={placeholder} />
        </Select.Trigger>
        <Select.IndicatorGroup pr={3}>
          <Select.Indicator
            color="var(--secondary)"
            transition="transform .2s"
            _open={{ transform: "rotate(180deg)" }}
          />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content
            border="2px solid var(--light-orange)"
            borderRadius="16px"
            boxShadow="0 0 16px var(--light-orange-2)"
            zIndex={1500}
          >
            {collections.items.map((option) => (
              <Select.Item
                item={option}
                key={option.value}
                color="var(--primary)"
                fontWeight={600}
                fontSize="16px"
                p={3}
                _selected={{ background: "var(--light-orange)" }}
                _hover={{
                  background: "var(--light-orange)",
                }}
                gap="12px"
              >
                {option.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
}
