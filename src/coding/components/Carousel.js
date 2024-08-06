import React, { useState } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  return (
    <div>
      <button onClick={prev}>Previous</button>
      <div>{items[currentIndex]}</div>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Carousel;
