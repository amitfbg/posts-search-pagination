import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const NavigatePage = styled.span`
  padding: 0.75rem;
  border: 1px solid gray;
  cursor: pointer;
  visibility: ${({ isNavigationDisabled }) =>
    isNavigationDisabled ? "hidden" : "visible"};
  background-color: ${({ isPageSelected }) =>
    isPageSelected && "rgb(220, 220, 220)"};
`;

function Pagination({
  totalProductsCount,
  perPageCount,
  setCurrPage,
  currPage,
}) {
  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalProductsCount / perPageCount &&
      selectedPage !== currPage
    ) {
      setCurrPage(selectedPage);
    } else {
      setCurrPage(1);
    }
  };
  return (
    totalProductsCount > 0 && (
      <Container>
        <NavigatePage
          id="previous-page"
          onClick={() => selectPageHandler(currPage - 1)}
          isNavigationDisabled={currPage === 1}
        >
          ◀
        </NavigatePage>

        {[...Array(Math.floor(totalProductsCount / perPageCount))].map(
          (_, i) => {
            return (
              <NavigatePage
                key={i}
                id={"page-" + i}
                isPageSelected={currPage === i + 1}
                onClick={() => selectPageHandler(i + 1)}
              >
                {i + 1}
              </NavigatePage>
            );
          }
        )}

        <NavigatePage
          id="next-page"
          onClick={() => selectPageHandler(currPage + 1)}
          isNavigationDisabled={
            currPage === Math.floor(totalProductsCount / perPageCount)
          }
        >
          ▶
        </NavigatePage>
      </Container>
    )
  );
}

export default Pagination;
