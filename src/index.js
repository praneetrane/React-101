import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';

function MyInfo(){
  return (
    <div>
      <h1>Praneet Rane</h1>
      <p style={{color: "Purple", fontStyle: "Italic"}}>I am a fullstack .Net developer. <br/> My favourite vacation spots are:</p>
      <ul>
        <li>Andaman</li>
        <li>Dubai</li>
        <li>Santorini</li>
      </ul>
    </div>
  );
}

reactDom.render(<MyInfo/> , document.getElementById("root"));