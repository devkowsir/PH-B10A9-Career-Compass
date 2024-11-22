import React from "react";
import { WhyChooseUsSection } from "../assets/config";

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="my-24 py-12 bg-center bg-cover text-base-content"
      style={{ backgroundImage: `url(${WhyChooseUsSection.image})` }}
    >
      <div className="container flex flex-col bg-base-100/80 rounded-lg p-8 xl:py-16">
        <h2 className="text-4xl font-bold text-center mb-6">{WhyChooseUsSection.heading}</h2>
        <p className="text-lg text-center mb-8">{WhyChooseUsSection.subHeading}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {WhyChooseUsSection.content.map((feature, index) => (
            <div key={index} className="xl:p-4 flex md:flex-col md:items-center gap-4">
              <img src={feature.icon} alt={feature.feature} className="w-24 h-24 mr-4" />
              <div>
                <h3 className="text-xl font-semibold md:text-center">{feature.feature}</h3>
                <p className="mt-2">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
