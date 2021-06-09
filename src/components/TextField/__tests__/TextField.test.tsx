import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import TextField from "../";
import { theme } from "../../../config";

it("renders text field correctly", () => {
  const TextFieldComponent = renderer
    .create(
      <ThemeProvider theme={theme}>
        <TextField label="" value="" onChange={() => {}} />
      </ThemeProvider>
    )
    .toJSON();

  expect(TextFieldComponent).toMatchSnapshot();
});
