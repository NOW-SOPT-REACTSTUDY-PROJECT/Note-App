// CustomDropdown.tsx
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

interface CustomDropdownProps {
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

function CustomDropdown({ options, onChange }: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(options[0].value);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    onChange(value);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropdownWrapper ref={dropdownRef}>
      <DropdownHeader onClick={handleToggle}>
        {options.find((option) => option.value === selectedValue)?.label}
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {options.map((option) => (
            <DropdownItem
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
}

export default CustomDropdown;

const DropdownWrapper = styled.div`
  position: relative;
  width: 200px;
`;

const DropdownHeader = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1000;
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
