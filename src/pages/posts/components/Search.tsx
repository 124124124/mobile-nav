import { SearchIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-content: center;
  border: 2px solid #f7fff7;
  padding: 6px 10px;
  border-radius: 8px;
`;
const StyledInput = styled.input`
  width: 100%;
  border: none;
  font-family: "Inter", sans-serif;
  outline: none;
  background: #202020;
  padding: 0 10px;
  color: #f7fff7;
`;

const Search: React.FC<SearchProps> = ({ setSearchValue }) => {
  const [value, setValue] = useState("");

  return (
    <StyledContainer>
      <SearchIcon height={30} />
      <StyledInput
        type={"text"}
        // value={value}
        onChange={(event: any) => setSearchValue(event.target.value)}
        placeholder="Поиск по сайту"
      />
    </StyledContainer>
  );
};

interface SearchProps {
  setSearchValue: (value: string) => void;
}

export default Search;
