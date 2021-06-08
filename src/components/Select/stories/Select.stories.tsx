import styled from "styled-components";
import Select from "..";

const Container = styled.div``;
const data = ["type 1", "type 2"];

export default { title: "DropDown" };

const onValueSelect = (value: string) => {
  console.log(value);
};

export const defaultSelect = () => (
  <Container>
    <Select
      emptyText="Type"
      data={data}
      label="Label"
      onValueSelect={onValueSelect}
    />
  </Container>
);

export const withErrorSelect = () => (
  <Container>
    <Select
      emptyText="Type"
      data={data}
      label="Label"
      onValueSelect={onValueSelect}
      errorMessage="Select cannot be empty"
    />
  </Container>
);
