import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import Select from "../";
import { theme } from "../../../config";

it("renders select correctly", () => {
  const selectComponent = renderer
    .create(
      <ThemeProvider theme={theme}>
        <Select
          label=""
          data={[]}
          value=""
          emptyText=""
          onValueSelect={() => {}}
        />
      </ThemeProvider>
    )
    .toJSON();

  expect(selectComponent).toMatchSnapshot();
});
