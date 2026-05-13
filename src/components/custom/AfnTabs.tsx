import { Tab } from "@/types/tabs.type";
import { Box, For, Tabs } from "@chakra-ui/react";

interface AfnTabs {
  tabs: Tab[];
}

export default function AfnTabs({ tabs }: AfnTabs) {
  return (
    <Tabs.Root defaultValue={tabs[0].title}>
      <Tabs.List
        display={"flex"}
        marginBottom={"16px"}
        borderColor={"var(--light-orange-2)"}
      >
        <For each={tabs}>
          {(tab) => (
            <Tabs.Trigger
              key={tab.title}
              value={tab.title}
              justifyContent={"center"}
              borderRadius={"9999px"}
              padding={"16px"}
              fontSize={"16px"}
              outline={"none"}
              color={"var(--primary)"}
              width={"full"}
              _before={{
                backgroundColor: "var(--primary)",
              }}
              _selected={{
                fontWeight: 600,
              }}
            >
              {tab.title}
            </Tabs.Trigger>
          )}
        </For>
      </Tabs.List>
      <Box position={"relative"}>
        <For each={tabs}>
          {(tab) => {
            return (
              <Tabs.Content
                key={tab.title}
                value={tab.title}
                position={"absolute"}
                inset={"0"}
                opacity={"0"}
                _open={{
                  animation: "fade-in 800ms 200ms forwards",
                }}
                _closed={{
                  animation: "fade-out 200ms",
                }}
              >
                {tab.content}
              </Tabs.Content>
            );
          }}
        </For>
      </Box>
    </Tabs.Root>
  );
}
