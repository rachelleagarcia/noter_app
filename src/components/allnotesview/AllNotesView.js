import React, { useState } from 'react';
import NoteCard from '../notecard/NoteCard';
import AddNote from '../addnote/AddNote';

function AllNotesView() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  return (
    <div className="main-area">
      <AddNote onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <NoteCard
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}
    </div>
  );
}

export default AllNotesView;
