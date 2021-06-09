import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import HeroItem from "../";
import { theme } from "../../../config";

it("renders hero item correctly", () => {
  const heroItemComponent = renderer
    .create(
      <ThemeProvider theme={theme}>
        <HeroItem imageUrl="" name="" description="" type="" />
      </ThemeProvider>
    )
    .toJSON();

  expect(heroItemComponent).toMatchSnapshot();
});
