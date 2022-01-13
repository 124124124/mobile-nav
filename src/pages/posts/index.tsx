import React, { useState } from "react";
import styled from "styled-components";
import { usePostCtx } from "../../context";
import PostItem from "./components/PostItem";
import Search from "./components/Search";
import classess from "./index.module.css";
import _ from "lodash";

const StyledPostsListClean = styled.div`
  grid-column: 1 / 3;
  margin: 10px 0;
  font-weight: 500;
  font-size: 18px;
`;

const Posts: React.FC = () => {
  const { posts } = usePostCtx();
  const [searchValue, setSearchValue] = useState("");

  const searchResult = () => {
    return _.filter(posts, (post) => {
      return post.title
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase());
    });
  };

  return (
    <div>
      <Search setSearchValue={setSearchValue} />
      <div className={classess.postList}>
        {searchResult().length ? (
          searchResult()?.map((item) => {
            return <PostItem {...item} />;
          })
        ) : (
          <StyledPostsListClean
            children={"Упс, я ничего не нашел 😅"}
          />
        )}
      </div>
    </div>
  );
};

export default Posts;
