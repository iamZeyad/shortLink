import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [longURL, setLongURL] = useState('');
  const [shortURL, setShortURL] = useState('');
  function handleClick(){
    const randomID = Math.random().toString(36).substring(7)
    setShortURL('http://cpit405.co/' + randomID);
  }
  return (
    <div className="App">
      <h1>Tiny URL</h1>
      <div className='form'>
        <label htmlFor='longURL'>Enter a long URL</label>
        <input type='text' id='longURL' value={longURL} onChange={(e) => setLongURL(e.target.value)}/>
      </div>
      <button className='btn' onClick={handleClick}>shorten URL</button>
      <div className='result'>
        <p id='shortURL'>{shortURL}</p>
      </div>
    </div>
  );
}

export default App;
