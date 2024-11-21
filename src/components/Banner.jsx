import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BannerSection } from "../assets/config";

const slides = BannerSection.slides;
const slideCount = slides.length;

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Automatically move to the next slide every 3 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
    }, 3000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative aspect-[4/3] bg-black/60 lg:h-[768px] lg:aspect-[unset]">
      <div className="absolute -z-10 isolate w-full h-full">
        {slides.map(({ image }, i) => (
          <img
            className={`absolute w-full h-full object-cover transition-opacity duration-300 ${
              currentSlide == i ? "opacity-100" : "opacity-0"
            }`}
            src={image}
            key={i}
          ></img>
        ))}
      </div>
      <div className="container h-full px-4 flex flex-col gap-2 justify-center items-center text-center">
        <div className="shrink-0 relative w-full h-10 text-lg text-base-100 font-bold">
          {slides.map(({ caption }, i) => (
            <h2
              key={i}
              className={`absolute w-full transition-opacity duration-300 text-accent ${
                i == currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {caption}
            </h2>
          ))}
        </div>
        <h1 className="text-2xl font-bold text-base-100 sm:text-3xl md:text-4xl lg:text-5xl">
          {BannerSection.heading}
        </h1>
        <p className="text-base-300/75">{BannerSection.subHeading}</p>
        <Link to={"/register"} className="btn btn-primary mt-4 sm:btn-lg">
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Banner;
