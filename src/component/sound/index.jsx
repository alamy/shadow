import * as React from 'react';
import './estilo.css';
import ringer from "../../assets/audio/ringer.mp3";

export default function Sound(){
  const audio = new Audio(ringer);
  audio.loop = true;

  return (
    <div>
      <button
      className='audio'
        onClick={() => {
          audio.loop = false;
          audio.play();
        }}
      >
        Iniciar
      </button>
    </div>
  );
};