import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import FilterCard from "./FilterCard";

describe("Filter Card", () => {
  const onChange = jest.fn();
  afterEach(cleanup);
  it("should render with empty value", () => {
    render(
      <FilterCard
        id="test-filter-card"
        name="test-filter-card"
        filterStateSet={onChange}
        filterValue=""
        placeholder="enter text"
      />
    );
  });
  it("should render with value", () => {
    render(
      <FilterCard
        id="test-filter-card"
        name="test-filter-card"
        filterStateSet={onChange}
        filterValue="testing"
        placeholder="enter text"
      />
    );
    const inputValue = screen.getByLabelText("test-filter-card");
    expect(inputValue.value).toBe("testing");
  });
  it("should render with input values", () => {
    render(
      <FilterCard
        id="test-filter-card"
        name="test-filter-card"
        filterStateSet={onChange}
        placeholder="enter text"
      />
    );
    const inputValue = screen.getByLabelText("test-filter-card");
    fireEvent.change(inputValue, { target: { value: "123" } });
    expect(inputValue.value).toBe("123");
  });
  it("should render with value but on clicking clear button onchange should be called", () => {
    render(
      <FilterCard
        id="test-filter-card"
        name="test-filter-card"
        filterStateSet={onChange}
        filterValue="testing"
        placeholder="enter text"
      />
    );
    const clearButton = screen.getByRole("button", { id: "clear-search" });
    clearButton.click();
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
