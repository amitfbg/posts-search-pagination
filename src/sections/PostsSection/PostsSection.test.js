/* eslint-disable testing-library/render-result-naming-convention */
import { cleanup, render, screen } from "@testing-library/react";
import * as React from "react";
import PostsSection from "./PostsSection";

const PostsSectionComponent = <PostsSection postFilterText="" />;

describe("PostsSection Component", () => {
  afterEach(cleanup);
  it("Loading Case", () => {
    jest
      .spyOn(React, "useContext")
      .mockReturnValue({ loading: true, error: false, posts: [] });
    let temp = render(PostsSectionComponent);
    expect(temp).toBeDefined();
    temp.unmount();
  });
  it("Error Case", () => {
    jest
      .spyOn(React, "useContext")
      .mockReturnValue({ loading: false, error: true, posts: [] });
    let temp = render(PostsSectionComponent);
    let textFound = screen.getByText("Uh-oh ! Something not right.");
    expect(textFound).toBeDefined();
    temp.unmount();
  });
  it("Empty Data Case", () => {
    jest
      .spyOn(React, "useContext")
      .mockReturnValue({ loading: false, error: false, posts: [] });
    let temp = render(PostsSectionComponent);
    let textFound = screen.getByText("No Data Available");
    expect(textFound).toBeDefined();
    temp.unmount();
  });
  it("Contains some post and without filtering", () => {
    jest.spyOn(React, "useContext").mockReturnValue({
      loading: false,
      error: false,
      posts: [
        { id: 1, title: "post 1", body: "post one " },
        { id: 2, title: "post 2", body: "post two " },
      ],
    });

    let temp = render(PostsSectionComponent);
    let textFound = screen.getByText("post 1");
    expect(textFound).toBeDefined();
    temp.unmount();
  });
  it("Contains some post and with filtering", () => {
    jest.spyOn(React, "useContext").mockReturnValue({
      loading: false,
      error: false,
      posts: [
        { id: 1, title: "post 1", body: "post one " },
        { id: 2, title: "post 2", body: "post two " },
        { id: 3, title: "post 2.1", body: "post two one " },
      ],
    });

    let temp = render(<PostsSection postFilterText="one" />);

    let textFound = screen.getByText("post 2.1");
    expect(textFound).toBeDefined();
    temp.unmount();
  });
});
