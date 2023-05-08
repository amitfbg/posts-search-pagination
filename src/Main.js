import React, { useState } from "react";
import styled from "styled-components";
import FilterCard from "./components/FilterCard/FilterCard";
import PostsSection from "./sections/PostsSection/PostsSection";

const Container = styled.div`
  padding: 1rem;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  font-style: italic;
`;

const FilterSection = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

function Main() {
  const [postFilterText, setPostFilterText] = useState("");

  return (
    <Container>
      <Title>Your Posts</Title>
      <FilterSection>
        <FilterCard
          name="Search Posts"
          id="post-filter"
          filterStateSet={setPostFilterText}
          filterValue={postFilterText}
          placeholder="Search for posts"
        />
      </FilterSection>
      <PostsSection postFilterText={postFilterText} />
    </Container>
  );
}

export default Main;
