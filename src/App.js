import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ShortenedURL from './ShortenedURL';
import Button from './Button';
import InputLabel from './InputLabel'

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
      <InputLabel longURL={longURL} onLongURLChange={setLongURL} />
      </div>
      <Button className='btn' onClick={handleClick} label='Shorten URL'/>
      <ShortenedURL shortURL={shortURL}/>
    </div>
  );
}

export default App;
