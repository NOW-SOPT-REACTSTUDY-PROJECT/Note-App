import React, { useState } from "react";
import styled from "styled-components";

interface NoteInputProps {
  addNote: (note: {
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
  }) => void;
}

const NoteInput: React.FC<NoteInputProps> = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const now = new Date();
    addNote({
      title,
      content,
      createdAt: now,
      updatedAt: now,
    });
    setTitle("");
    setContent("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <Textarea
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <Button type="submit">Create</Button>
    </Form>
  );
};

export default NoteInput;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 2rem;
  margin-bottom: 0.5rem;
  border-radius: 1rem;
  border: 1px solid #ccc;
`;

const Textarea = styled.textarea`
  padding: 2rem 0 8rem 2rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 2rem;
  border-radius: 0.25rem;
  border: none;
  background-color: lightgray;
  font-size: 3rem;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;
