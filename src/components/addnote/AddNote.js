import React, { useState } from 'react';
import './addnote.css';

function AddNote(props) {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: '',
      content: '',
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="form--note">
        <input
          className="input--title"
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Note Content"
        />
        <button className="button--add" onClick={submitNote}>
          Add
        </button>
      </form>
    </div>
  );
}

export default AddNote;
