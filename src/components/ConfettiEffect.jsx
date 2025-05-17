import React from 'react';
import Confetti from 'react-confetti';

const ConfettiEffect = () => {
  // Optionally, you can use window size hooks for full screen
  return (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      numberOfPieces={180}
      recycle={false}
    />
  );
};

export default ConfettiEffect;
