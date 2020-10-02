import React from 'react';
import './selectcategory.css';

function SelectCategory() {
  return (
    <div className="select-category">
      <button className="select-category--button">
        <span className="work-dot dot dot--bigger"></span>
      </button>
      <button className="select-category--button">
        <span className="school-dot dot dot--bigger"></span>
      </button>
      <button className="select-category--button">
        <span className="personal-dot dot dot--bigger"></span>
      </button>
      <button className="select-category--button">
        <span className="holiday-dot dot dot--bigger"></span>
      </button>
    </div>
  );
}

export default SelectCategory;
