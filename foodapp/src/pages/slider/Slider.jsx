import React, { useEffect, useState, useRef } from "react";

const images = [
  "https://www.kfcpakistan.com/images/f9ef5210-9789-11f0-8081-2946661625ed-Deal1_desktop_image-2025-09-22075850.jpg",
  "https://www.kfcpakistan.com/images/f9ef5210-9789-11f0-8081-2946661625ed-Deal2_desktop_image-2025-09-22075850.jpg",
];

const Slider = () => {
  const interval = 3500;
  const heightClass = "md:h-[500px] h-[130px]";

  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((s) => (s + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [interval]);

 
  function handleMouseEnter() {
    clearInterval(timerRef.current);
  }
  function handleMouseLeave() {
    timerRef.current = setInterval(() => {
      setCurrent((s) => (s + 1) % images.length);
    }, interval);
  }

  return (
    <div
      className={`relative md:w-full ${heightClass}  w-[100%] shadow-xl md:mt-30 lg:mt-30 mt-20 `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out  ${
            i === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          <img
            src={src}
            alt={`slide-${i}`}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;
