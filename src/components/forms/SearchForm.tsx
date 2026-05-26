"use client";

import AfnTabs from "@/components/custom/AfnTabs";
import SearchInput from "@/components/search/SearchInput";
import SearchResult from "@/components/search/SearchResult";
import { Stack } from "@chakra-ui/react";
import { useState } from "react";

export default function SearchForm() {
  const [search, setSearch] = useState("");
  const tabMenus = [
    {
      title: "Users",
      content: (
        <Stack gap={6}>
          <SearchInput search={search} onSearch={setSearch} />
          <SearchResult search={search} />
        </Stack>
      ),
    },
    {
      title: "Posts",
      content: (
        <Stack gap={6}>
          <SearchInput search={search} onSearch={setSearch} />
          <SearchResult search={search} />
        </Stack>
      ),
    },
  ];
  return (
    <Stack gap={6}>
      <SearchInput search={search} onSearch={setSearch} />
      <SearchResult search={search} />
    </Stack>
  );
}
