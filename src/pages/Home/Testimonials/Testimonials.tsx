import { useEffect, useState } from "react";
import array from "../../../../public/review.json";
import { FcNext, FcPrevious } from "react-icons/fc";

const Testimonials = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  // The slider images array
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? array.length - 2 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === array.length - 2 ? 0 : currentSlider + 1
    );
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlider]);

  const isSmallScreen = window.innerWidth <= 768;
  return (
    <div>
      <p className=" font-serif text-3xl font-semibold text-center">
        Customer Reviews
      </p>
      <div className="max-w-full min-w-[350px]  mx-auto h-[400px] flex flex-row items-center overflow-hidden gap-5 lg:gap-10 md:px-16 lg:px-24">
        <div className="relative overflow-hidden">
          <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
            {/* arrow left */}
            <button
              onClick={prevSlider}
              className="flex justify-center items-center bg-green-200 p-2 rounded-full w-6 h-6 md:w-11 md:h-11 relative overflow-hidden"
            >
              <FcPrevious size={40} className=" " />

              <div className="absolute top-0 left-0 border-[2px] w-full h-full border-red-300 rounded-full border-dotted transition-all hover:animate-spin"></div>
            </button>
            <button
              onClick={nextSlider}
              className="flex justify-center items-center bg-green-200 p-2 rounded-full w-8 h-8 md:w-11 md:h-11 relative overflow-hidden"
            >
              <FcNext size={40} className=" " />

              <div className="absolute top-0 left-0 border-[2px] w-full h-full border-red-300 rounded-full border-dotted transition-all hover:animate-spin"></div>
            </button>
          </div>
          {/* slider container */}
          <div
            className="ease-linear duration-300 flex"
            style={{
              transform: `translateX(-${
                currentSlider * (isSmallScreen ? 100 : 100)
              }%)`,
            }}
          >
            {/* sliders */}
            {array.map((each, idx) => (
              <div key={idx} className="p-4 min-w-full md:min-w-[100%]  w-full">
                <div className="h-full p-8 rounded flex flex-col justify-center items-center space-y-3">
                  <a className=" flex flex-col justify-center text-center items-center space-y-3">
                    <img
                      alt="testimonial"
                      src={`https://source.unsplash.com/200x200/?${each.keyWord}`}
                      className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center justify-center items-center mx-auto"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        {each.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {each?.designation}
                      </span>
                    </span>
                  </a>
                  <p className="leading-relaxed mb-6 text-gray-500 md:w-[100ch] text-center">
                    {each?.testimonialDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
