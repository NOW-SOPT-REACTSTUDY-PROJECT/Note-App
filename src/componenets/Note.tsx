import { useState } from "react";
import styled from "styled-components";

interface NoteProps {
  title: string;
  content: string;
  onEdit: (newTitle: string, newContent: string) => void;
  onDelete: () => void;
}

const Note = ({ title, content, onEdit, onDelete }: NoteProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  const handleSave = () => {
    onEdit(newTitle, newContent);
    setIsEditing(false);
  };

  return (
    <NoteCard>
      {isEditing ? (
        <>
          <Input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <Textarea
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
          <Button onClick={handleSave}>Save</Button>
          <Button onClick={() => setIsEditing(false)}>Cancel</Button>
        </>
      ) : (
        <>
          <NoteTitle>{title}</NoteTitle>
          <NoteContent>{content}</NoteContent>
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
          <Button onClick={onDelete}>Delete</Button>
        </>
      )}
    </NoteCard>
  );
};

export default Note;

const NoteCard = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  border: 1px solid #ccc;
  background-color: #fff;
`;

const NoteTitle = styled.h3`
  margin: 0;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  color: red;
`;

const NoteContent = styled.p`
  margin: 0;
  font-size: 3rem;
  color: blue;
`;

const Input = styled.input`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  border: 1px solid #ccc;
  width: 100%;
`;

const Textarea = styled.textarea`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  border: 1px solid #ccc;
  width: 100%;
  height: 100px;
`;

const Button = styled.button`
  width: 7rem;
  padding: 1rem;
  margin-right: 1rem;
  border-radius: 1rem;
  border: none;
  background-color: lightgray;
  font-size: 1rem;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;
