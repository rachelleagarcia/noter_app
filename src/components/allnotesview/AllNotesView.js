import React, { useState } from 'react';
import NoteCard from '../notecard/NoteCard';
import AddNote from '../addnote/AddNote';
import './allnotesview.css';

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
      <div className="note-area">
        {notes.map((noteItem, index) => {
          return (
            <NoteCard
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              tags={noteItem.tags}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AllNotesView;
