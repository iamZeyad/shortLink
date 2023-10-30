import React from 'react';

function InputLabel({ longURL, onLongURLChange }) {
  return (
    <div>
      <label htmlFor='longURL'>Enter a long URL</label>
      <input
        type='text'
        id='longURL'
        value={longURL}
        onChange={(e) => onLongURLChange(e.target.value)}
      />
    </div>
  );
}

export default InputLabel;