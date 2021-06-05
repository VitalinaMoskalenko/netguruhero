import React from "react";
import styled from "styled-components";
import Button from "../";

const CustomButton = styled(Button).attrs({
  style: {
    backgroundColor: "violet",
  },
})``;

export default { title: "Button" };

export const defaultButton = () => (
  <Button text="Click Me" onClick={() => {}} />
);

export const customButton = () => (
  <CustomButton text="Click Me" onClick={() => {}} />
);
