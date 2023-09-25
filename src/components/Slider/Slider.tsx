'use client'
import { useState, useEffect } from 'react';
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const QuoteSlider = ({ quotes }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide === quotes.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, 3000); // 20 секунд

    return () => clearInterval(interval);
  }, [currentSlide, quotes]);

  const nextSlide = () => {
    if (currentSlide === quotes.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(quotes.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="relative mx-auto p-5">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl"
        onClick={prevSlide}
      >
        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
      </button>
      <div className="p-4 bg-white border-4 rounded h-64 items-center flex justify-center">
        <blockquote className="text-xl">
          <p>{quotes[currentSlide].text}</p>
        </blockquote>
        <cite className="block mt-2 text-gray-600 text-right">
          {quotes[currentSlide].author}
        </cite>
      </div>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl"
        onClick={nextSlide}
      >
        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default QuoteSlider;
