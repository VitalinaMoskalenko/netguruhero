import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import Spinner from "../";
import { theme } from "../../../config";

it("renders spinner correctly", () => {
  const spinnerComponent = renderer
    .create(
      <ThemeProvider theme={theme}>
        <Spinner />
      </ThemeProvider>
    )
    .toJSON();

  expect(spinnerComponent).toMatchSnapshot();
});
