import React, { useState } from "react";
import styled from "styled-components";
import Title from "../componenets/Title";
import Toggle from "../componenets/Toggle";
import NoteInput from "../componenets/Noteinput";
import NoteList from "../componenets/NoteList";

interface NoteType {
  title: string;
  content: string;
}

const Home: React.FC = () => {
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [showNoteInput, setShowNoteInput] = useState(true);

  const addNote = (note: NoteType) => {
    setNotes([...notes, note]);
    setShowNoteInput(false);
  };

  const editNote = (index: number, newTitle: string, newContent: string) => {
    const updatedNotes = notes.map((note, i) =>
      i === index ? { title: newTitle, content: newContent } : note
    );
    setNotes(updatedNotes);
  };

  const deleteNote = (index: number) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <HomeWrapper>
      <HomeContainer>
        <HomeHeader>
          <Title />
          <Toggle />
        </HomeHeader>
        {showNoteInput ? (
          <NoteInput addNote={addNote} />
        ) : (
          <>
            <NoteList
              notes={notes}
              onEditNote={editNote}
              onDeleteNote={deleteNote}
              onAddNewNote={() => setShowNoteInput(true)}
            />
          </>
        )}
      </HomeContainer>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url("/src/assets/image/background.jpg");
  background-size: cover;
  background-position: center;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 80vh;
  border-radius: 5rem;
  background-color: #f2f3f5;
  padding: 2rem;
`;

const HomeHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem;
  margin-bottom: 2rem;
`;
