"use client";

import { Box, HStack } from "@chakra-ui/react";
import AfnField from "../custom/AfnField";
import AfnInput from "../custom/AfnInput";
import AfnButton from "../custom/AfnButton";
import { LuX } from "react-icons/lu";

interface SearchInputProps {
  search: string;
  onSearch: (value: string) => void;
}

export default function SearchInput({ search, onSearch }: SearchInputProps) {
  const SEARCH_BTN_STYLES = {
    bgColor: "transparent!",
    color: "var(--primary)",
    width: 8,
    height: 8,
    p: 0,
    visibility: search ? "visible" : "hidden",
    opacity: search ? 1 : 0,
    transform: search ? "translateX(0)" : "translateX(5px)",
    transition: "visibility .2s, opacity .2s, transform .2s",
  };
  return (
    <Box position={"relative"}>
      <AfnField label="Want to search for users?">
        <AfnInput
          placeholder="Type any user you want to search..."
          value={search}
          onChange={(e) => {
            onSearch(e.target.value);
          }}
        />
        <HStack gap={0} position="absolute" right={0}>
          <AfnButton {...SEARCH_BTN_STYLES} onClick={() => onSearch("")}>
            <LuX className="search-icon" />
          </AfnButton>
        </HStack>
      </AfnField>
    </Box>
  );
}
