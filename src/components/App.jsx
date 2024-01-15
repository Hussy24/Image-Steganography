import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import UploadButton from './UploadButton';
import { encode, decode } from '../steganography';

export default function App() {
  const [option, setOption] = useState('home');
  const [decodedText, setDecodedText] = useState('');
  function handleClick(event) {
    const { name } = event.currentTarget;
    if (name === 'home') {
      setOption('home');
      document.getElementById('encoded-image').style.display = 'none';
    } else if (name === 'encode') {
      setOption('encode');
    } else if (name === 'decode') {
      setOption('decode');
    }
  }

  function handleDecode(event)
  {
    const decodedMessage = decode(); 
    setDecodedText(decodedMessage);
  }

  return (
    <div className='content'>
      <h1>IMAGE<span id="word"> STEGO</span></h1>
      {option === 'home' && <Button style={{margin: '1rem'}} name='encode' onClick={handleClick} variant="contained">Encode</Button>}
      {option === 'home' && <Button style={{margin: '1rem'}} name='decode' onClick={handleClick} variant="contained">Decode</Button>}
      {option === 'encode' && <TextField variant="outlined" multiline type="text" id="secret" name="secret" placeholder="Enter secret message" />}
      {option !== 'home' && <UploadButton />}
      {option === 'encode' && <Button style={{margin: '1rem'}} onClick={encode} variant="contained">Encode</Button>}
      {option === 'decode' && <Button style={{margin: '1rem'}} onClick={handleDecode} variant="contained">Decode</Button>}
      {option !== 'home' && <Button style={{margin: '1rem'}} name='home' onClick={handleClick} variant="contained">Return</Button>}
      {option === 'decode' && decodedText &&
        <TextField
          variant="outlined"
          multiline
          className
          type="text"
          id="decoded-text"
          name="decoded-text"
          placeholder="Decoded Text"
          value={decodedText}
        />
  }
      <img id="encoded-image" alt='encoded output'></img>
      <canvas id="canvas"></canvas>
    </div>
  );
};
