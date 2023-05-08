import { cleanup, render, screen } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Filter Card", () => {
  const onChange = jest.fn();
  afterEach(cleanup);
  it("should render", () => {
    render(
      <Pagination
        totalProductsCount={50}
        perPageCount={10}
        setCurrPage={onChange}
        currPage={1}
      />
    );
  });
  it("should click next page button", () => {
    render(
      <Pagination
        totalProductsCount={50}
        perPageCount={10}
        setCurrPage={onChange}
        currPage={1}
      />
    );
    const inputValue = screen.getByText("▶");
    inputValue.click();
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  it("should click next page then previous page", () => {
    render(
      <Pagination
        totalProductsCount={50}
        perPageCount={10}
        setCurrPage={onChange}
        currPage={1}
      />
    );
    const forward = screen.getByText("▶");
    forward.click();
    const backward = screen.getByText("◀");
    backward.click();
    expect(onChange).toHaveBeenCalledTimes(2);
  });
  it("should click third page number", () => {
    render(
      <Pagination
        totalProductsCount={50}
        perPageCount={10}
        setCurrPage={onChange}
        currPage={1}
      />
    );
    const thirdPage = screen.getByText("3");
    thirdPage.click();
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
