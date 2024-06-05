import { useState } from "react";
import styled from "styled-components";

interface ToggleBtnProps {
  toggled: boolean;
}

function Toggle() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <ToggleBtn onClick={handleToggle} toggled={isToggled}>
      {isToggled ? "ON" : "OFF"}
    </ToggleBtn>
  );
}

export default Toggle;

const ToggleBtn = styled.button<ToggleBtnProps>`
  position: absolute;
  right: 43rem;
  top: 15rem;
  font-size: 2rem;
  font-weight: 900;
  width: 10rem;
  height: 5rem;
  background-color: ${(props) => (props.toggled ? "lightgray" : "gray")};
  color: white;
  border: none;
  border-radius: 3rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;
