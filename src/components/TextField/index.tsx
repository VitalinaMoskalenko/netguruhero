import React, { ChangeEvent } from "react";
import styled, { CSSProperties } from "styled-components";
import { Body } from "..";
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
  height: 200px;
`;

type FieldPropsType = {
  isError: boolean;
};

const Field = styled.textarea<FieldPropsType>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  border: ${({ isError, theme }) =>
    isError ? `1px solid ${theme.colors.red}` : "0px"};
  padding: 16px;
  font-family: "Courier New", Courier, monospace;
  resize: none;
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

const TextArea = ({
  label,
  value,
  onChange,
  containerStyle,
  errorMessage,
}: PropsType) => {
  const onChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
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

export default TextArea;
