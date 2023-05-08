import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  font-size: 1.25rem;
`;

const NavigatePage = styled.span`
  padding: 0.25rem;
  margin: 0.25rem;
  cursor: pointer;
  visibility: ${({ isNavigationDisabled }) =>
    isNavigationDisabled ? "hidden" : "visible"};
  color: ${({ isPageSelected }) => isPageSelected && "red"};
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
