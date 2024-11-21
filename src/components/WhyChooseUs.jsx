import React from "react";
import { WhyChooseUsSection } from "../assets/config";

const WhyChooseUs = () => {
  return (
    <section className="container flex flex-col px-4 py-24 bg-base-100">
      {/* Left Side: Image */}
      <div className="mx-auto max-w-screen-lg sm:px-12">
        <img src={WhyChooseUsSection.image} alt="Why Choose Us" className="w-full object-cover rounded-lg shadow-lg" />
      </div>

      {/* Right Side: Features */}
      <div className="w-full mt-8">
        <h2 className="text-4xl font-bold text-center mb-6">{WhyChooseUsSection.heading}</h2>
        <p className="text-lg text-center mb-8">{WhyChooseUsSection.subHeading}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WhyChooseUsSection.content.map((feature, index) => (
            <div key={index} className="flex items-start">
              <img src={feature.icon} alt={feature.feature} className="w-24 h-24 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">{feature.feature}</h3>
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
