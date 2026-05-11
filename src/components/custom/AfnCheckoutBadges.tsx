import { ListType } from "@/types/menus.type";
import {
  CheckboxCard,
  CheckboxGroup,
  CheckboxGroupProps,
  Text,
  Wrap,
} from "@chakra-ui/react";

interface AfnCheckboxBadgesProps extends CheckboxGroupProps {
  items: ListType[];
  label: string;
}

const CHECKBOX_ROOT_STYLES = {
  outline: "none",
  border: "none",
  boxShadow: "none",
  backgroundColor: "var(--light-orange)",
  color: "var(--primary)",
  width: "fit",
  borderRadius: "9999px",
  cursor: "pointer",
  _checked: {
    backgroundColor: "var(--primary)",
    color: "white",
  },
};

export default function AfnCheckboxBadges({
  items,
  label,
  onValueChange,
}: AfnCheckboxBadgesProps) {
  return (
    <CheckboxGroup gap={"16px"} onValueChange={onValueChange}>
      <Text fontWeight={600} fontSize={16}>
        {label}
      </Text>
      <Wrap>
        {items.map((item) => (
          <CheckboxCard.Root
            key={item.value}
            value={item.value}
            {...CHECKBOX_ROOT_STYLES}
          >
            <CheckboxCard.HiddenInput />
            <CheckboxCard.Control py={2} px={4} backgroundColor={"transparent"}>
              <CheckboxCard.Label
                whiteSpace={"pre"}
                fontWeight={600}
                fontSize={"16px"}
              >
                {item.label}
              </CheckboxCard.Label>
              <CheckboxCard.Indicator
                color={"white"}
                border={"none"}
                backgroundColor={"transparent"}
              />
            </CheckboxCard.Control>
          </CheckboxCard.Root>
        ))}
      </Wrap>
    </CheckboxGroup>
  );
}
