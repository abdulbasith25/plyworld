import React, { useEffect, useState } from 'react';

const images = [
  '/slide1.jpg',
  '/slide2.jpg',
  '/slide3.jpg',
]; 

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change slide every 3s

    return () => clearInterval(timer); // Cleanup
  }, []);

  return (
    <div className="w-200 h-150 overflow-hidden relative rounded-lg flex items-center justify-center pt-4 ">
      <img
        src={images[index]}
        alt={`slide-${index}`}
        className="w-100 h-full object-cover transition-all duration-700 ease-in-out rounded-xl"
      />
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-gray-400'} transition-all`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
