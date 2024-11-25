import React from "react";

const Overview = ({ heading, subHeading, image, description }) => {
  return (
    <section id="overview" data-aos="slide-up" data-aos-once>
      <div className="container">
        <div className="flex flex-col text-base-content/75 text-center">
          <h2 className="text-4xl font-bold text-center mb-2">{heading}</h2>
          <p className="text-lg text-center mb-12">{subHeading}</p>
          <div className="max-w-screen-md mx-auto flex flex-col">
            <img src={image} alt="" className="rounded-box" />
            <p className="mt-4">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
