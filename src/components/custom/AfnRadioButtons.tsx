import { ListType } from "@/types/menus.type";
import { For, RadioCard, RadioCardRootProps, Stack } from "@chakra-ui/react";

interface AfnRadioButtonsProps extends RadioCardRootProps {
  items: ListType[];
}

export default function AfnRadioButtons({
  items,
  onValueChange,
}: AfnRadioButtonsProps) {
  return (
    <RadioCard.Root outline={"none"} onValueChange={onValueChange}>
      <Stack gap={4}>
        <For each={items}>
          {(item) => (
            <RadioCard.Item
              fontSize={"16px"}
              fontWeight={500}
              border={"none"}
              boxShadow={"none"}
              key={item.value}
              value={item.value}
              backgroundColor={"transparent"}
            >
              <RadioCard.ItemHiddenInput />
              <RadioCard.ItemControl>
                <RadioCard.ItemIndicator
                  _checked={{ backgroundColor: "var(--primary)" }}
                  borderColor={"var(--primary)"}
                />
                <RadioCard.ItemText>{item.label}</RadioCard.ItemText>
              </RadioCard.ItemControl>
            </RadioCard.Item>
          )}
        </For>
      </Stack>
    </RadioCard.Root>
  );
}
