import React from 'react';
import moment from 'moment';
import icon from './images/time.png';
import './notecard.css';

function NoteCard(props) {
  let date = moment().format('MMMM Do, YYYY');
  let time = moment.duration().days();

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note-card">
      <div className="note-content">
        <div className="note-header">
          <input
            className="button--completed"
            type="checkbox"
            onClick={handleClick}
          ></input>
          <h2 className="note--title">{props.title}</h2>
          <span className="date">{date}</span>
        </div>
        <div className={`note-content--category note--${props.category}`}></div>
        <p className="note-content--text">{props.content}</p>
        <span className="note-content--tags">{props.tags}</span>
        <span className="note-content-time">
          <img className="icon--time" src={icon} alt="time icon"></img>
          {time} days
        </span>
      </div>
    </div>
  );
}

export default NoteCard;
