import { useState, useEffect } from "react";

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

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(
        (JSON.parse(storedNotes) as NoteType[]).map((note) => ({
          ...note,
          createdAt: new Date(note.createdAt),
          updatedAt: new Date(note.updatedAt),
        }))
      );
    }
  }, []);

  const saveNotesToLocalStorage = (notes: NoteType[]) => {
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  const addNote = (note: NoteType) => {
    const newNotes = [...notes, { ...note, bookmarked: false }];
    setNotes(newNotes);
    saveNotesToLocalStorage(newNotes);
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
    saveNotesToLocalStorage(updatedNotes);
  };

  const deleteNote = (index: number) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);
  };

  const toggleBookmark = (index: number) => {
    const updatedNotes = notes.map((note, i) =>
      i === index ? { ...note, bookmarked: !note.bookmarked } : note
    );
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);
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
