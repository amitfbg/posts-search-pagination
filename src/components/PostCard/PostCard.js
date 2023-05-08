import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 3rem;
  padding: 1rem;
  background-color: #f6f8fa;
  margin: 0.75rem;
  border: solid 1px #f6f8fa;
  border-radius: 1rem;
  box-shadow: 1px 1px 6px #d3d3d3;
  font-size: 1rem;
`;
const PostTitle = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
`;
const PostBody = styled.div``;

// this give the Post information
function PostCard({ title, postBody }) {
  return (
    <Container>
      <PostTitle>{title || "NA"}</PostTitle>
      <PostBody>{postBody || "NA"}</PostBody>
    </Container>
  );
}

export default PostCard;
