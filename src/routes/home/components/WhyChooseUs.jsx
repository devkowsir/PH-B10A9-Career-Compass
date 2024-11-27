import React from "react";
import { WhyChooseUsSection } from "../config";

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="my-24 py-12 bg-center bg-cover text-base-content md:py-16"
      style={{ backgroundImage: `url(${WhyChooseUsSection.image})` }}
      data-aos="fade-left"
      data-aos-once
    >
      <div className="container">
        <div className="px-4 py-8 rounded-box bg-base-100/75 md:py-16 md:px-8">
          <h2 className="text-4xl font-bold text-center mb-2">{WhyChooseUsSection.heading}</h2>
          <p className="text-lg text-center mb-12">{WhyChooseUsSection.subHeading}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-y-12">
            {WhyChooseUsSection.content.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 md:gap-4 md:flex-col md:text-center">
                <img src={feature.icon} alt={feature.feature} className="w-24 h-24 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold md:text-center">{feature.feature}</h3>
                  <p className="mt-2">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
