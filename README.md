# Image-Steganography

## About
<br>
An Image Steganography (hiding/encoding information(text) in an image) web app.

<br>

<h4>Frameworks used:</h4>
<ul>
  <li>
    <a href="https://reactjs.org/">  React Js </a>
   </li>
   <li>
    <a href="https://material-ui.com/"> Material UI Framework </a> 
  </li>
</ul>
<h3>Working Diagram</h3>
<img src="https://media.geeksforgeeks.org/wp-content/uploads/2-72.png">

  <h3>LSB based Image steganography</h3>
    <p>  LSB-Steganography is a steganography technique in which we hide messages inside an image by replacing Least significant bit of image with the bits of message to be hidden.As the LSB is only changed, the human eys cannot detect the changes in it. </p>
    <ul>
      <h3>Encryption Algorithm</h3>
       <li>Begin
        <li>Input: Cover_Image, Secret_Message<!--Secret key--> ;
        <li>Transfer Secret_Message into Text;
        <li>Convert Text to Binary_Codes;
        <li>Set BitsPerUnit to Zero;
        <li>Encode Message to Binary_Codes;
        <li>Add by 2 unit for bitsPerUnit;
        <li>Output: Stego_Image;
       <li>End
    </ul>
    <ul>
      <h3>Decryption Algorithm</h3>
       <li>Begin
        <li>Input: Stego_Image
       <li>Calculate BitsPerUnit;
        <li>Decode All_Binary_Codes;
        <li>Shift by 2 unit for bitsPerUnit;
        <li>Convert Binary_Codes to Text;
       <li>Open Text;
        <li>Output Secret_Message;
       <li>End
    </ul>
  </p>
</p>
<pre>
<h4>Function used in steganography.js to encode the message</h4>
  <code>
  // Encodes message using LSB method
  function encodeMessage(colors, message) {
    let messageBits = getBitsFromNumber(message.length);
    messageBits = messageBits.concat(getMessageBits(message));
    let history = [];
    let pos = 0;
    while (pos < messageBits.length) {
      let loc = getNextLocation(history, colors.length);
      colors[loc] = setBit(colors[loc], 0, messageBits[pos]);
      while ((loc + 1) % 4 !== 0) {
        loc++;
      }
      colors[loc] = 255;
      pos++;
    }
  };
</code>
<h4>Function used in steganography.js to decode the message</h4>
<code>
  // Decodes message from the image
  function decodeMessage(colors) {
    let history = [];
    let messageSize = getNumberFromBits(colors, history);
    if ((messageSize + 1) * 16 > colors.length * 0.75) {
      return '';
    }
    if (messageSize === 0) {
      return '';
    }
    let message = [];
    for (let i = 0; i < messageSize; i++) {
      let code = getNumberFromBits(colors, history);
      message.push(String.fromCharCode(code));
    }
    return message.join('');
  };
</code>
</pre>
<hr>


