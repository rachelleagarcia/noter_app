import React, { useState } from 'react';
import NoteCard from '../components/NoteCard/NoteCard';
import AddNote from '../components/addnote/AddNote';
import './Home.css';

function AllNotesView() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

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
              category={noteItem.category}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AllNotesView;
