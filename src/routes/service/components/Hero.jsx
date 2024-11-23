import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ heading, subHeading, image, ctaText, ctaLink }) => {
  return (
    <section className="relative aspect-[4/3] bg-black/60 lg:h-[768px] lg:aspect-[unset]">
      <div className="absolute -z-10 isolate w-full h-full">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="container h-full flex flex-col justify-center items-center text-center text-base-300 lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">{heading}</h1>
        <p className="text-lg lg:text-2xl mb-6">{subHeading}</p>
        <Link to={ctaLink} className="btn btn-primary sm:btn-lg">
          {ctaText}
        </Link>
      </div>
    </section>
  );
};

export default Hero;
