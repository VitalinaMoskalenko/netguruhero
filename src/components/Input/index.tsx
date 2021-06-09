import React, { ChangeEvent } from "react";
import styled, { CSSProperties } from "styled-components";
import { SmallBody } from "../Paragraphs";

type PropsType = {
  label: string;
  value?: string;
  onChange: (value: string) => void;
  containerStyle?: CSSProperties;
  errorMessage?: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

type FieldPropsType = {
  isError: boolean;
};

const Field = styled.input<FieldPropsType>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  height: 40px;
  border: ${({ isError, theme }) =>
    isError ? `1px solid ${theme.colors.red}` : "0px"};
  padding: 16px;
  font-family: "Courier New", Courier, monospace;
`;

const Label = styled(SmallBody)`
  font-weight: bold;
  margin-bottom: 6px;
  opacity: 0.5;
`;

const ErrorMessage = styled(SmallBody)`
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.red};
`;

const Input = ({
  label,
  value,
  onChange,
  containerStyle,
  errorMessage,
}: PropsType) => {
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Container style={containerStyle}>
      <Label>{label}</Label>
      <Field isError={!!errorMessage} value={value} onChange={onChangeValue} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};

export default Input;
