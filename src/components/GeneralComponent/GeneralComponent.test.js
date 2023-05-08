/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/render-result-naming-convention */
import { cleanup, render, screen } from "@testing-library/react";
import GeneralComponent from "./GeneralComponent";

describe("General Component", () => {
  afterEach(cleanup);
  it("renders loader", () => {
    const result = render(<GeneralComponent val="Loading" />);
    const someElement = result.container.querySelector("#loader");
    expect(someElement).toBeDefined();
  });
  it("renders Error message", () => {
    render(<GeneralComponent val="Error" />);
    let textFound = screen.getByText("Uh-oh ! Something not right.");
    expect(textFound).toBeDefined();
  });
  it("renders Empty data message", () => {
    render(<GeneralComponent val="NoData" />);
    let textFound = screen.getByText("No Data Available");
    expect(textFound).toBeDefined();
  });
  it("renders empty component", () => {
    render(<GeneralComponent val="" />);
  });
});
