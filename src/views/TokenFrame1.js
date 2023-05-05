import React, { useState } from 'react';

function TokenFrame(props) {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (

      <aside className='cardTileBtn'>
        HELLO
      <button
      className={isHovered ? 'btnHover' : ''}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
yyy
      </button>
      </aside>
  );
}

export default TokenFrame;