import React, { useState, useRef } from "react";
import styled from "styled-components";
import Title from "../componenets/Title";
import Toggle from "../componenets/Toggle";
import NoteInput from "../componenets/Noteinput";
import NoteList from "../componenets/NoteList";

interface NoteType {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const Home: React.FC = () => {
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [showNoteInput, setShowNoteInput] = useState(true);
  const sortRef = useRef<HTMLSelectElement>(null);

  const addNote = (note: NoteType) => {
    setNotes([...notes, note]);
    setShowNoteInput(false);
  };

  const editNote = (index: number, newTitle: string, newContent: string) => {
    const updatedNotes = notes.map((note, i) =>
      i === index
        ? {
            ...note,
            title: newTitle,
            content: newContent,
            updatedAt: new Date(),
          }
        : note
    );
    setNotes(updatedNotes);
  };

  const deleteNote = (index: number) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const getSortedNotes = () => {
    const sortOption = sortRef.current?.value;
    return notes.sort((a, b) => {
      if (sortOption === "recentlyCreated") {
        return b.createdAt.getTime() - a.createdAt.getTime();
      } else if (sortOption === "recentlyUpdated") {
        return b.updatedAt.getTime() - a.updatedAt.getTime();
      }
      return 0;
    });
  };

  return (
    <HomeWrapper>
      <HomeContainer>
        <HomeHeader>
          <Title />
          <Toggle />
        </HomeHeader>
        <SortDropdown ref={sortRef} onChange={() => setNotes([...notes])}>
          <option value="recentlyCreated">최근 생성순</option>
          <option value="recentlyUpdated">최신 수정순</option>
        </SortDropdown>
        {showNoteInput ? (
          <NoteInput addNote={addNote} />
        ) : (
          <>
            <NoteList
              notes={getSortedNotes()}
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

const SortDropdown = styled.select`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
`;
