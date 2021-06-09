import React, { useState } from "react";
import styled from "styled-components";
import { Body, SmallBody } from "../Paragraphs";

type PropsType = {
  emptyText: string;
  value?: string;
  label: string;
  data: string[];
  onValueSelect: (value: string) => void;
  errorMessage?: string;
};

const Container = styled.div`
  position: relative;
`;

type ValueContainerType = {
  isOpen: boolean;
  isError: boolean;
};

const ValueContainer = styled.div<ValueContainerType>`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  height: 40px;
  border: ${({ isError, theme }) =>
    isError ? `1px solid ${theme.colors.red}` : "0px"};
  padding: 0px 16px;
  border-bottom-left-radius: ${({ isOpen }) => (isOpen ? 0 : 8)}px;
  border-bottom-right-radius: ${({ isOpen }) => (isOpen ? 0 : 8)}px;
`;

const ValueListContainer = styled.div`
  position: absolute;
  top: 65px;
  bottom: 0;
  left: 0;
  right: 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow: auto;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 100;
`;

const DropDownIcon = styled(Body)`
  color: ${({ theme }) => theme.colors.black05};
  transform: rotate(270deg);
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

const ValueButtonContainer = styled.button`
  cursor: pointer;
  text-align: left;
  width: 100%;
  height: 40px;
  border: 0px;
  padding: 0px 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.white};
  font-family: "Courier New", Courier, monospace;

  :hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

const Select = ({
  label,
  data,
  value,
  emptyText,
  onValueSelect,
  errorMessage,
}: PropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const selectValue = (item: string) => {
    setSelectedValue(item);
    onValueSelect(item);
    toggleIsOpen();
  };

  return (
    <Container>
      <Label>{label}</Label>
      <ValueContainer
        onClick={toggleIsOpen}
        isOpen={isOpen}
        isError={!!errorMessage}
      >
        <Body>{selectedValue || emptyText}</Body>
        <DropDownIcon>&#10094;</DropDownIcon>
      </ValueContainer>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {isOpen && (
        <ValueListContainer>
          {data.map((item, index) => {
            return (
              <ValueButtonContainer
                onClick={() => selectValue(item)}
                key={item}
              >
                <Body>{item}</Body>
              </ValueButtonContainer>
            );
          })}
        </ValueListContainer>
      )}
    </Container>
  );
};

export default Select;
