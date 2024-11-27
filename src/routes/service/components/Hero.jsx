import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ heading, subHeading, image, ctaText }) => {
  return (
    <section className="relative aspect-[4/3] lg:h-[768px] lg:aspect-[unset]" data-aos="fade" data-aos-once>
      <div className="absolute w-full h-full bg-black/60">
        <img src={image} alt="" className="absolute -z-10 w-full h-full object-cover" />
      </div>
      <div className="container relative z-10 h-full flex flex-col justify-center items-center text-center text-base-300 lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">{heading}</h1>
        <p className="text-lg lg:text-2xl mb-6">{subHeading}</p>
        <Link to={"#pricing"} className="btn btn-primary sm:btn-lg">
          {ctaText}
        </Link>
      </div>
    </section>
  );
};

export default Hero;
