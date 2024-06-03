import React from "react";
import styled from "styled-components";
import Note from "./Note";

interface NoteType {
  title: string;
  content: string;
}

interface NoteListProps {
  notes: NoteType[];
  onEditNote: (index: number, newTitle: string, newContent: string) => void;
  onDeleteNote: (index: number) => void;
  onAddNewNote: () => void;
}

const NoteList: React.FC<NoteListProps> = ({
  notes,
  onEditNote,
  onDeleteNote,
  onAddNewNote,
}) => {
  return (
    <List>
      {notes.map((note, index) => (
        <Note
          key={index}
          title={note.title}
          content={note.content}
          onEdit={(newTitle, newContent) =>
            onEditNote(index, newTitle, newContent)
          }
          onDelete={() => onDeleteNote(index)}
        />
      ))}
      <AddButton onClick={onAddNewNote}>새 메모 추가</AddButton>
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

const AddButton = styled.button`
  padding: 2rem;
  margin-top: 1rem;
  border-radius: 1rem;
  border: 1px solid #ccc;
  background-color: lightgray;
  font-size: 3rem;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;
