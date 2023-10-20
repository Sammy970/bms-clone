"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const autoScrollTimeoutRef = useRef(null);

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  const startAutoScroll = () => {
    setIsAutoScrolling(true);
  };

  const stopAutoScroll = () => {
    setIsAutoScrolling(false);
  };

  useEffect(() => {
    if (isAutoScrolling) {
      autoScrollTimeoutRef.current = setTimeout(() => {
        handleNextSlide();
      }, 4000);
    } else {
      clearTimeout(autoScrollTimeoutRef.current);
    }
  }, [currentSlide, isAutoScrolling]);

  return (
    <div className="relative">
      <div className="w-full relative flex p-2 px-0 bg-[#edebeb]">
        <AiOutlineLeft
          onClick={handlePrevSlide}
          className="m-auto text-5xl p-3 rounded-r-[6px] cursor-pointer bg-black opacity-[0.6] text-gray-400 z-20"
        />
        <div
          className="w-full h-[39vh] flex overflow-hidden relative m-auto"
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
        >
          <Swipe
            onSwipeLeft={handleNextSlide}
            onSwipeRight={handlePrevSlide}
            className="relative z-10 w-[80%] h-full m-auto"
          >
            {images.map((image, index) => {
              const isActive = index === currentSlide;
              const animationClass = isActive
                ? "opacity-100 duration-1000 ease-in-out"
                : "opacity-0 duration-1000 ease-in-out";
              return (
                <div
                  key={image.alt}
                  className={`absolute top-0 left-0 w-full h-full transition-all ${animationClass}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill="fill"
                    className="rounded-[4px] w-full h-full"
                  />
                </div>
              );
            })}
          </Swipe>
        </div>
        <AiOutlineRight
          onClick={handleNextSlide}
          className="m-auto text-5xl p-3 rounded-l-[6px] cursor-pointer bg-black opacity-[0.6] text-gray-400 z-20"
        />
        <div className="absolute bottom-2 m-auto w-full z-40 flex justify-center p-2">
          {images.map((_, index) => {
            return (
              <div
                className={
                  index === currentSlide
                    ? "h-3 w-3 bg-white rounded-full mx-2 mb-2 cursor-pointer"
                    : "h-3 w-3 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                }
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
