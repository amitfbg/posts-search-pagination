import { cleanup, render, screen } from "@testing-library/react";
import PostCard from "../PostCard/PostCard";

describe("PostCard Component", () => {
  afterEach(cleanup);
  it("renders without passing title and body", () => {
    render(<PostCard />);
    let textFound = screen.getAllByText("NA");
    expect(textFound).toBeDefined();
  });
  it("renders with title and NA for body", () => {
    render(<PostCard title="title" />);
    let titleFound = screen.getByText("title");
    expect(titleFound).toBeDefined();
    let bodyFound = screen.getByText("NA");
    expect(bodyFound).toBeDefined();
  });
  it("renders with body and NA for title", () => {
    render(<PostCard postBody="postBody" />);
    let titleFound = screen.getByText("NA");
    expect(titleFound).toBeDefined();
    let bodyFound = screen.getByText("postBody");
    expect(bodyFound).toBeDefined();
  });
  it("renders with both title and body", () => {
    render(<PostCard postBody="postBody" title="title" />);
    let titleFound = screen.getByText("title");
    expect(titleFound).toBeDefined();
    let bodyFound = screen.getByText("postBody");
    expect(bodyFound).toBeDefined();
  });
});
