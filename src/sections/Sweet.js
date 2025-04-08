// Using FlowBite For this component

'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  'https://images.pexels.com/photos/14774070/pexels-photo-14774070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/7986618/pexels-photo-7986618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/18488302/pexels-photo-18488302/free-photo-of-traditional-indian-sweets-motichoor-laddoo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/18488303/pexels-photo-18488303/free-photo-of-malpua.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/18488298/pexels-photo-18488298/free-photo-of-gulab-jamun.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/18488306/pexels-photo-18488306/free-photo-of-dhoda.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      isLargeScreen
        ? (prev + 2) % images.length
        : (prev + 1) % images.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      isLargeScreen
        ? (prev - 2 + images.length) % images.length
        : (prev - 1 + images.length) % images.length
    );
  };

  const getVisibleImages = () => {
    if (isLargeScreen) {
      return [images[currentIndex], images[(currentIndex + 1) % images.length]];
    }
    return [images[currentIndex]];
  };

  return (
    <div id="sweet" className='bg-[#FEFCE8] py-16'>   
        <h2 className="text-3xl font-bold text-red-600 mb-10 text-center">
        <span className="border-b-2 border-red-600">Relish Every Sweet Bite with Aaoji's Authentic Sweets</span>
        </h2>
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg h-64 md:h-96 ">

      {/* Images */}
      <div className="flex w-full h-full gap-2 ">
        {getVisibleImages().map((src, idx) => (
          <div key={idx} className="relative w-full md:w-1/2 h-full  ">
            <Image
              src={src}
              alt={`Slide ${currentIndex + idx + 1}`}
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 p-2 rounded-full"
      >
        <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 6 10">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 p-2 rounded-full"
      >
        <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 6 10">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </button>
    </div>
    </div>
  );
};

export default Carousel;
