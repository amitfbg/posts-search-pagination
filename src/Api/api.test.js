/* eslint-disable jest/no-conditional-expect */
import { cleanup } from "@testing-library/react";
import * as APIFunction from "./api";

const { fetchPost } = APIFunction;

describe("API", () => {
  afterEach(cleanup);
  it("API success", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () =>
          Promise.resolve([{ id: 1, title: "post 1", body: "post 1 body" }]),
      })
    );
    const output = await fetchPost();
    expect(output[0].title).toEqual("post 1");
  });
  it("API fail", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 501,
      })
    );
    await fetchPost().catch((err) => {
      expect(err).toBeDefined();
    });
  });
});
