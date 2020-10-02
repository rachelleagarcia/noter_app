import React, { useState } from 'react';
import SelectCategory from '../selectcategory/SelectCategory';
import arrow from './images/right-arrow.png';
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
      tags: '',
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
          placeholder="Note Content..."
        />
        <SelectCategory />
        <textarea
          className="text-area--tags"
          name="tags"
          onChange={handleChange}
          value={note.tags}
          placeholder="#tags"
        />
        <button className="button--add" onClick={submitNote}>
          <img src={arrow} alt="submit button" className="button--submit" />
        </button>
      </form>
    </div>
  );
}

export default AddNote;
