import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import GeneralComponent from "../../components/GeneralComponent/GeneralComponent";
import PostCard from "../../components/PostCard/PostCard";
import Pagination from "../../components/pagination/Pagination";
import { APIContext } from "../../context/ApiContext";

const DisplaySection = styled.div`
  height: calc(100vh - 10rem);
`;

const Wrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostsWrap = styled.div`
  max-height: calc(100% - 5rem);
  overflow-y: scroll;
  width: 100%;
  margin: 1rem 0;
`;

function PostsSection({ postFilterText }) {
  const { loading, error, posts } = useContext(APIContext);

  const [filteredList, setFilteredList] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [perPageCount] = useState(10);

  useEffect(() => {
    if (!loading && !error && Array.isArray(posts) && posts.length) {
      let filteredData = posts?.filter((curr) => {
        if (curr.title.includes(postFilterText)) {
          return true;
        }
        if (curr.body.includes(postFilterText)) {
          return true;
        }
        return false;
      });
      // setting the filtered data
      setFilteredList(filteredData);
      setCurrPage(1);
    }
  }, [error, loading, postFilterText, posts]);

  const getData = () => {
    if (error) {
      return <GeneralComponent val="Error" />;
    }
    if (loading) {
      return <GeneralComponent val="Loading" />;
    }
    if (Array.isArray(filteredList) && filteredList?.length > 0) {
      return (
        <Wrap>
          <PostsWrap>
            {filteredList
              .slice(
                currPage * perPageCount - perPageCount,
                currPage * perPageCount
              )
              .map((curr) => {
                return (
                  <PostCard
                    key={curr?.id}
                    title={curr?.title}
                    postBody={curr?.body}
                  />
                );
              })}
          </PostsWrap>
          <Pagination
            totalProductsCount={filteredList.length}
            perPageCount={perPageCount}
            setCurrPage={setCurrPage}
            currPage={currPage}
          />
        </Wrap>
      );
    } else {
      return <GeneralComponent val="NoData" />;
    }
  };

  return <DisplaySection>{getData()}</DisplaySection>;
}

export default PostsSection;
