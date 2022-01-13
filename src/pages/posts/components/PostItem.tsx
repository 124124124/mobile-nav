import React from "react";
import styled from "styled-components";
import { HeartIcon as FavoritesIcon } from "@heroicons/react/outline";

const StyledContainer = styled.div`
  @media screen and (min-width: 380px) {
    width: clamp(200px, 70%, 300px);
  }
  border-radius: 15px;
  width: 200px;
  padding: 10px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledPoster = styled.img`
  background: #f7fff7;
  padding: 5px;
  border-radius: 15px;
  width: 100%;
`;
const StyledTitle = styled.div`
  margin: 5px 0;
  font-weight: 600;
  font-size: 17px;
  text-align: center;
`;
const StyledStock = styled.div`
  font-size: 15px;
  color: rgba(247, 255, 247, 0.5);
  margin: 0 0 5px 0;
`;
const StyledButton = styled.button`
  margin: 0 5px;
  width: 100%;
  outline: none;
  border: 2px solid #f7fff7;
  background: none;
  color: #f7fff7;
  font-weight: 500;
  padding: 10px 0;
  border-radius: 8px;
  transition: all 0.2s ease-out;
  :active {
    background: #f7fff7;
    color: #202020;
  }
`;

const StyledDisabledButton = styled.div`
  margin: 0 5px;
  width: 100%;
  outline: none;
  border: 2px solid #f7fff7;
  background: none;
  color: #f7fff7;
  font-weight: 500;
  text-align: center;
  padding: 10px 0;
  border-radius: 8px;
  opacity: 40%;
  user-select: none;
  cursor: not-allowed;
`;

const StyledButtonList = styled.div`
  display: flex;
  width: 100%;
`;

const StyledFavoritesButton = styled.button`
  margin: 0 5px;
  outline: none;
  border: 2px solid #f7fff7;
  background: none;
  color: #f7fff7;
  padding: 0 10px;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.2s ease-out;
  display: grid;
  place-items: center;
  :active {
    background: #f7fff7;
    color: #202020;
  }
`;

const PostItem: React.FC<any> = ({ poster, title, inStock }) => {
  return (
    <StyledContainer>
      <StyledPoster src={poster} />
      <StyledTitle children={title} />
      <StyledStock
        children={inStock ? "В наличии" : "Нет в наличии"}
      />
      <StyledButtonList>
        <StyledFavoritesButton
          children={<FavoritesIcon height={25} />}
        />

        {inStock ? (
          <StyledButton children={"Купить"} />
        ) : (
          <StyledDisabledButton children={"Купить"} />
        )}
      </StyledButtonList>
    </StyledContainer>
  );
};

export default PostItem;
