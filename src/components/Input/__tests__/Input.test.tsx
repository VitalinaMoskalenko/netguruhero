import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import Input from "../";
import { theme } from "../../../config";

it("renders input correctly", () => {
  const inputComponent = renderer
    .create(
      <ThemeProvider theme={theme}>
        <Input label="" value="" onChange={() => {}} />
      </ThemeProvider>
    )
    .toJSON();

  expect(inputComponent).toMatchSnapshot();
});
