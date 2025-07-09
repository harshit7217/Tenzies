import React from 'react';
import Confetti from 'react-confetti';

export default function Cheer() {
  return (
    < Confetti
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
}