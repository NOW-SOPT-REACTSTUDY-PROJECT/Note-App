import styled from "styled-components";
import Note from "./Note";

interface NoteType {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  bookmarked: boolean;
}

interface NoteListProps {
  notes: NoteType[];
  onEditNote: (index: number, newTitle: string, newContent: string) => void;
  onDeleteNote: (index: number) => void;
  onToggleBookmark: (index: number) => void;
  onAddNewNote: () => void;
}

const NoteList = ({
  notes,
  onEditNote,
  onDeleteNote,
  onToggleBookmark,
  onAddNewNote,
}: NoteListProps) => {
  return (
    <ListWrapper>
      <List>
        {notes.map((note, index) => (
          <Note
            key={index}
            title={note.title}
            content={note.content}
            bookmarked={note.bookmarked}
            onEdit={(newTitle, newContent) =>
              onEditNote(index, newTitle, newContent)
            }
            onDelete={() => onDeleteNote(index)}
            onToggleBookmark={() => onToggleBookmark(index)}
          />
        ))}
      </List>
      <AddButton onClick={onAddNewNote}>새 메모 추가</AddButton>
    </ListWrapper>
  );
};

export default NoteList;

const ListWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.div`
  width: 100%;
  max-height: 40rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const AddButton = styled.button`
  position: fixed;
  bottom: 11rem;
  right: 50rem;
  padding: 2rem;
  margin-top: 1rem;
  border-radius: 1rem;
  width: 92rem;
  height: 7.4rem;
  border: 1px solid #ccc;
  background-color: lightgray;
  font-size: 3rem;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;
