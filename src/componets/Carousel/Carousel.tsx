import { useCallback, useEffect, useState } from "react";

export const Carousel = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliderImages = [
    "https://source.unsplash.com/1200x670/?nature",
    "https://source.unsplash.com/1200x670/?hill",
    "https://source.unsplash.com/1200x670/?mountain",
    "https://source.unsplash.com/1200x670/?river",
    "https://source.unsplash.com/1200x670/?sea",
  ];
  
  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1
      ),
    [sliderImages.length]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="h-[240px] w-full md:h-[470px] lg:h-[670px] relative overflow-hidden">
    
      <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
        {sliderImages.map((_, inx) => (
          <button
            key={_}
            onClick={() => setCurrentSlider(inx)}
            className={`rounded-full duration-500 bg-white ${
              currentSlider === inx ? "w-8" : "w-2"
            } h-2`}
          ></button>
        ))}
      </div>
      {/* Carousel container */}
      <div
        className="ease-linear duration-500 flex transform-gpu"
        style={{ transform: `translateX(-${currentSlider * 100}%)` }}
      >
        {/* sliders */}
        {sliderImages.map((slide, inx) => (
          <img
            key={slide}
            src={slide}
            className="min-w-full h-72 bg-black/20 sm:h-96 md:h-[670px] object-cover"
            alt={`Slider - ${inx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
