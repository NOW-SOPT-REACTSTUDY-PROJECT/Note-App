import { styled } from "styled-components";

function Title() {
  return <TitleFont>Simple Memo</TitleFont>;
}

export default Title;

const TitleFont = styled.p`
  position: absolute;
  top: 15rem;
  font-size: 5rem;
  font-weight: 900;
`;
