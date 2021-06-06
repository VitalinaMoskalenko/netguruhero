import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { Body } from "..";
import { SmallBody } from "../Paragraphs";

type PropsType = {
  label: string;
  value?: string;
  onChange: (value: string) => void;
};

const Container = styled.div``;

const Field = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  height: 40px;
  border: 0px;
  padding: 0px 16px;
  font-family: "Courier New", Courier, monospace;
`;

const Label = styled(SmallBody)`
  font-weight: bold;
  margin-bottom: 6px;
`;

const Input = ({ label, value, onChange }: PropsType) => {
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <Field value={value} onChange={onChangeValue} />
    </Container>
  );
};

export default Input;
