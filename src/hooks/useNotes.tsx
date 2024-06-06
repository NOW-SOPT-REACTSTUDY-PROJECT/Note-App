import { useState } from "react";

export interface NoteType {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  bookmarked: boolean;
}

export const useNotes = () => {
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [sortOption, setSortOption] = useState("recentlyCreated");

  const addNote = (note: NoteType) => {
    setNotes([...notes, { ...note, bookmarked: false }]);
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

  const toggleBookmark = (index: number) => {
    const updatedNotes = notes.map((note, i) =>
      i === index ? { ...note, bookmarked: !note.bookmarked } : note
    );
    setNotes(updatedNotes);
  };

  const getSortedNotes = () => {
    if (sortOption === "bookmarked") {
      return notes.filter((note) => note.bookmarked);
    }
    return notes.sort((a, b) => {
      if (sortOption === "recentlyCreated") {
        return b.createdAt.getTime() - a.createdAt.getTime();
      } else if (sortOption === "recentlyUpdated") {
        return b.updatedAt.getTime() - a.updatedAt.getTime();
      }
      return 0;
    });
  };

  const handleSortChange = (sortOption: string) => {
    setSortOption(sortOption);
    setNotes([...notes]);
  };

  return {
    notes: getSortedNotes(),
    addNote,
    editNote,
    deleteNote,
    toggleBookmark,
    handleSortChange,
  };
};
