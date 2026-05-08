"use client";

import SearchInput from "@/components/search/SearchInput";
import SearchResult from "@/components/search/SearchResult";
import { Fragment, useState } from "react";

export default function SearchForm() {
  const [search, setSearch] = useState("");
  return (
    <Fragment>
      <SearchInput search={search} onSearch={setSearch} />
      <SearchResult search={search} />
    </Fragment>
  );
}
