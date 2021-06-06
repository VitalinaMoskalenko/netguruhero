import styled from "styled-components";
import Input from "../";

const Container = styled.div``;

export default { title: "Input" };

const onChange = (text: string) => {
  console.log(text);
};

export const defaultInput = () => (
  <Container>
    <Input label="Text" onChange={onChange} />
  </Container>
);
