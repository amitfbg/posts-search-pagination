/* eslint-disable testing-library/render-result-naming-convention */
import { render, screen } from "@testing-library/react";
import Main from "./Main";
import { wrapperComponent } from "./test-utils/test-utils";

const MainComponent = wrapperComponent(<Main />);

describe("Main Page Testing", () => {
    test("renders the main page which contains Your Post as title", () => {
        render(MainComponent);
        let postText = screen.getByText("Your Posts");
        expect(postText).toBeDefined();
    });
});
