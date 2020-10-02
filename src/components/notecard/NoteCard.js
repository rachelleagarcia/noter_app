import React from 'react';
import NoteCategory from '../notecategory/NoteCategory';
import moment from 'moment';
import './notecard.css';

function NoteCard(props) {
  let date = moment().format('MMMM Do, YYYY');

  return (
    <div className="note-card">
      <div className="note-content">
        <div className="note-header">
          <input className="button--completed" type="radio"></input>
          <h2 className="note--title">{props.title}</h2>
          <span className="date">{date}</span>
        </div>
        <NoteCategory />
        <p className="note-content--text">{props.content}</p>
        <span className="note-content--tags">{props.tags}</span>
      </div>
    </div>
  );
}

export default NoteCard;
