import React from "react";
import styled from "styled-components";

interface NoteProps {
  title: string;
  content: string;
}

const Note: React.FC<NoteProps> = ({ title, content }) => {
  return (
    <NoteCard>
      <NoteTitle>{title}</NoteTitle>
      <NoteContent>{content}</NoteContent>
    </NoteCard>
  );
};

export default Note;

const NoteCard = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  background-color: #fff;
`;

const NoteTitle = styled.h3`
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
`;

const NoteContent = styled.p`
  margin: 0;
  font-size: 1rem;
`;
