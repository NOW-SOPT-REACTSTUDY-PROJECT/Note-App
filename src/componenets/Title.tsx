import { styled } from "styled-components";

function Title() {
  return <TitleFont>Simple Memo</TitleFont>;
}

export default Title;

const TitleFont = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 80rem;
  top: 17rem;
  font-size: 3rem;
  font-weight: 900;
`;
