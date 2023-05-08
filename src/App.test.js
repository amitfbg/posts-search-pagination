import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders App and contains posts header", () => {
  render(<App />);
  let postsText = screen.getAllByText(/Posts/i);
  expect(postsText).toBeDefined();
});
