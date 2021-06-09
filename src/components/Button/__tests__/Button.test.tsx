import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import Button from "../";
import { theme } from "../../../config";

it("renders button correctly", () => {
  const buttonComponent = renderer
    .create(
      <ThemeProvider theme={theme}>
        <Button text="Button" onClick={() => {}} />
      </ThemeProvider>
    )
    .toJSON();

  expect(buttonComponent).toMatchSnapshot();
});
