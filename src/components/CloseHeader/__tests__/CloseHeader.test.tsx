import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import CloseHeader from "../";
import { theme } from "../../../config";

it("renders close header correctly", () => {
  const closeHeaderComponent = renderer
    .create(
      <ThemeProvider theme={theme}>
        <CloseHeader title="CloseHeader" onClose={() => {}} />
      </ThemeProvider>
    )
    .toJSON();

  expect(closeHeaderComponent).toMatchSnapshot();
});
