import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import UploadButton from './UploadButton';
import { encode, decode, resetImageUpload } from '../steganography';
import "./App.css";
export default function App() {
  const [option, setOption] = useState('home');
  const [decodedText, setDecodedText] = useState('');
  const [head1text, sethead1text]=useState('BY');
  const [head2text, sethead2text]=useState('Ahmad Raza & Hasnain Sajid');
  function handleClick(event) {
    const { name } = event.currentTarget;
    if (name === 'home') {
      setOption('home');
      sethead1text('BY');
      sethead2text('Ahmad Raza & Hasnain Sajid');
      resetImageUpload();
      setDecodedText('')
      document.getElementById('encoded-image').style.display = 'none';
    } else if (name === 'encode') {
      setOption('encode');
      sethead1text('Encoding');
      sethead2text('');
    } else if (name === 'decode') {
      setOption('decode');
      sethead1text('Decoding');
      sethead2text('');
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
      <h3>{head1text}</h3>
      <h3>{head2text}</h3>
      {option === 'home' && <Button className="button" style={{margin: '1rem'}} name='encode' onClick={handleClick} variant="contained">Encoding</Button>}
      {option === 'home' && <Button className="button" style={{margin: '1rem'}} name='decode' onClick={handleClick} variant="contained">Decoding</Button>}
      {option === 'encode' && <TextField variant="outlined" multiline type="text" id="secret" name="secret" placeholder="Enter secret message" />}
      {option !== 'home' && <UploadButton />}
      {option === 'encode' && <Button className="button" style={{margin: '1rem'}} onClick={encode} variant="contained">Encode</Button>}
      {option === 'decode' && <Button className="button" style={{margin: '1rem'}} onClick={handleDecode} variant="contained">Decode</Button>}
      {option !== 'home' && <Button className="button" style={{margin: '1rem'}} name='home' onClick={handleClick} variant="contained">Return</Button>}
      {option === 'decode' && decodedText &&
        <><h4>Decoded Text:</h4>
        <TextField 
        variant="outlined"
        multiline
        className
        type="text"
        id="decoded-text"
        name="decoded-text"
        placeholder="Decoded Text"
        value={decodedText}
      /></>
        
  }
      <img id="encoded-image" alt='encoded output'></img>
      <canvas id="canvas"></canvas>
    </div>
  );
};

