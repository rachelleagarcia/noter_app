import React from 'react';
import './selecttags.css';

function SelectTags() {
  return (
    <div className="select-tags">
      <input type="text" placeholder="#tags" className="tags--text"></input>
    </div>
  );
}

export default SelectTags;
