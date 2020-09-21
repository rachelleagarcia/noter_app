import React from 'react';
import './footer.css';
import LastDate from './LastDate';

function Tags() {
  return (
    <div className="footer">
      <span className="footer--tags">#tag</span>
      <LastDate />
    </div>
  );
}

export default Tags;
