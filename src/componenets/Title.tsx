import { styled } from "styled-components";

function Title() {
  return <TitleFont>Simple Memo</TitleFont>;
}

export default Title;

const TitleFont = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  font-weight: 900;
`;
