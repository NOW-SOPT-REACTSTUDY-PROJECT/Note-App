import { styled } from "styled-components";

function Title() {
  return <TitleFont>Simple Memo</TitleFont>;
}

export default Title;

const TitleFont = styled.p`
  display: flex;
`;
