import React from 'react';

function ShortenedURL(props) {
  return (
    <div className='result'>
      <p id='shortURL'>{props.shortURL}</p>
    </div>
  );
}

export default ShortenedURL;