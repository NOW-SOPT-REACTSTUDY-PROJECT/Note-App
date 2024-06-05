import { useState } from "react";
import styled from "styled-components";
import Title from "../componenets/Title";
import Toggle from "../componenets/Toggle";
import NoteInput from "../componenets/Noteinput";
import NoteList from "../componenets/NoteList";
import CustomDropdown from "../componenets/CustomDropDown";
import { NoteType, useNotes } from "../hooks/useNotes";

function Home() {
  const { notes, addNote, editNote, deleteNote, handleSortChange } = useNotes();
  const [showNoteInput, setShowNoteInput] = useState(true);

  const handleAddNote = (note: NoteType) => {
    addNote(note);
    setShowNoteInput(false);
  };

  return (
    <HomeWrapper>
      <HomeContainer>
        <HomeHeader>
          <Title />
          <Toggle />
        </HomeHeader>
        {!showNoteInput && (
          <CustomDropdown
            options={[
              { value: "recentlyCreated", label: "최근 생성순" },
              { value: "recentlyUpdated", label: "최신 수정순" },
            ]}
            onChange={handleSortChange}
          />
        )}
        {showNoteInput ? (
          <NoteInput addNote={handleAddNote} />
        ) : (
          <NoteList
            notes={notes}
            onEditNote={editNote}
            onDeleteNote={deleteNote}
            onAddNewNote={() => setShowNoteInput(true)}
          />
        )}
      </HomeContainer>
    </HomeWrapper>
  );
}

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
  position: relative;
`;

const HomeHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 12rem;
  width: 100%;
  margin-left: 32rem;
  gap: 6rem;
`;
