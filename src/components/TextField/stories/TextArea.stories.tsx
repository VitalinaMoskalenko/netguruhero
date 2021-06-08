import styled from "styled-components";
import TextArea from "..";

const Container = styled.div``;

export default { title: "TextArea" };

const onChange = (text: string) => {
  console.log(text);
};

export const defaultTextArea = () => (
  <Container>
    <TextArea label="Text" onChange={onChange} />
  </Container>
);

export const withErrorTextArea = () => (
  <Container>
    <TextArea
      label="TextArea with Error"
      onChange={onChange}
      errorMessage="TextArea cannot be empty"
    />
  </Container>
);
