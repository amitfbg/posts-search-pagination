/* eslint-disable testing-library/no-unnecessary-act */
import { cleanup, render } from "@testing-library/react";
import React from "react";
import * as Api from "../Api/api";
import { APIContextProvider } from "./ApiContext";
import { act } from "react-dom/test-utils";

describe("ApiContext", () => {
  afterEach(cleanup);
  it("Error API Response", async () => {
    jest
      .spyOn(Api, "fetchPost")
      .mockResolvedValue(Promise.reject(new Error("Error API Response")));
    await act(async () => {
      render(<APIContextProvider />);
    });
  });
  it("API Response success with posts as Array", async () => {
    jest
      .spyOn(Api, "fetchPost")
      .mockResolvedValue(
        Promise.resolve([{ id: 1, title: "1", body: "post 1" }])
      );
    await act(async () => {
      render(<APIContextProvider />);
    });
  });
  it("API Response success with posts as object which throws error", async () => {
    jest.spyOn(Api, "fetchPost").mockResolvedValue(Promise.resolve({}));
    await act(async () => {
      render(<APIContextProvider />);
    });
  });
});
