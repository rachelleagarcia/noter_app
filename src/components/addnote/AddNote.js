import React, { useState } from 'react';
import arrow from './images/right-arrow.png';
import './addnote.css';

function AddNote(props) {
  const [note, setNote] = useState({
    title: '',
    content: '',
    tags: '',
    category: '',
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
      category: '',
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="form--note" onSubmit={submitNote}>
        <input
          className="input--title"
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <input
          className="input--content"
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Note Content..."
        />
        <div className="select-category">
          <input
            type="radio"
            name="category"
            onChange={handleChange}
            className="select-category--button"
            value="work"
          ></input>
          <input
            type="radio"
            name="category"
            onChange={handleChange}
            className="select-category--button"
            value="personal"
          ></input>
          <input
            type="radio"
            name="category"
            onChange={handleChange}
            className="select-category--button"
            value="school"
          ></input>
          <input
            type="radio"
            name="category"
            onChange={handleChange}
            className="select-category--button"
            value="holiday"
          ></input>
        </div>
        <input
          className="input--tags"
          name="tags"
          onChange={handleChange}
          value={note.tags}
          placeholder="#tags"
        />
        <button className="button--add" type="submit">
          <img src={arrow} alt="submit button" className="button--submit" />
        </button>
      </form>
    </div>
  );
}

export default AddNote;
