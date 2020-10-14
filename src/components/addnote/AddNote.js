import React, { useState } from 'react';
import arrow from './images/right-arrow.png';
import './addnote.css';

function AddNote(props) {
  const [note, setNote] = useState({
    title: '',
    content: '',
    category: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (event) => {
    props.onAdd(note);
    setNote({
      title: '',
      content: '',
      category: '',
    });
    event.preventDefault();
  };

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
        <div className="select-category">
          <label>
            <input
              type="radio"
              name="category"
              onChange={handleChange}
              className="select-category--button"
              value="work"
            ></input>
            Work
          </label>
          <label>
            <input
              type="radio"
              name="category"
              onChange={handleChange}
              className="select-category--button"
              value="school"
            ></input>
            School
          </label>
          <label>
            <input
              type="radio"
              name="category"
              onChange={handleChange}
              className="select-category--button"
              value="personal"
            ></input>
            Personal
          </label>
          <label>
            <input
              type="radio"
              name="category"
              onChange={handleChange}
              className="select-category--button"
              value="holiday"
            ></input>
            Holiday
          </label>
        </div>
        <input
          className="input--content"
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Note Content..."
        />
        <button className="button--add" type="submit">
          <img src={arrow} alt="submit button" className="button--submit" />
        </button>
      </form>
    </div>
  );
}

export default AddNote;
