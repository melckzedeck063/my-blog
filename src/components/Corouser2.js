import React, { useState } from 'react';

export default function Corouser2({corouser1}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    'https://mdbcdn.b-cdn.net/img/new/slides/041.webp',
    'https://mdbcdn.b-cdn.net/img/new/slides/042.webp',
    'https://mdbcdn.b-cdn.net/img/new/slides/043.webp',
    'https://mdbcdn.b-cdn.net/img/new/slides/041.webp'
  ];

//   console.log(corouser1);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div
      id="carouselExampleIndicators"
      className="relative"
      data-te-carousel-init
      data-te-ride="carousel"
    >
      {/* Carousel items */}
      <div className="relative w-full h-70 xsm:h-72 overflow-hidden">
        {corouser1.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-600 ease-in-out ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
            data-te-carousel-item
          >
            <img src={image} className="block w-full h-full" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Carousel controls - prev item */}
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-blue-700 opacity-50 transition-opacity duration-150 ease-in-out hover:text-blue-700 hover:no-underline hover:opacity-90 hover:outline-none focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleIndicators"
        onClick={handlePrev}
      >
        Previous
      </button>

      {/* Carousel controls - next item */}
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-blue-700 opacity-50 transition-opacity duration-150 ease-in-out hover:text-blue-700 hover:no-underline hover:opacity-90 hover:outline-none focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleIndicators"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}
