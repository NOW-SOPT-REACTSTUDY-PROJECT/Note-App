import React from "react";
import styled from "styled-components";
import Note from "./Note";

interface NoteType {
  title: string;
  content: string;
}

interface NoteListProps {
  notes: NoteType[];
}

const NoteList: React.FC<NoteListProps> = ({ notes }) => {
  return (
    <List>
      {notes.map((note, index) => (
        <Note key={index} title={note.title} content={note.content} />
      ))}
    </List>
  );
};

export default NoteList;

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
`;
