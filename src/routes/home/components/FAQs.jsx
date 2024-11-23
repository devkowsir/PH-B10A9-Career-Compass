import React from "react";
import { FAQsSection } from "../config";
import FAQList from "../../../components/FAQList";

const FAQs = () => {
  return (
    <section id="faqs" className="container mb-24 bg-base-100 text-base-content/75">
      <h2 className="text-4xl font-bold text-center mb-2">{FAQsSection.heading}</h2>
      <p className="text-lg text-gray-600 text-center mb-12">{FAQsSection.subHeading}</p>
      <div className="max-w-screen-lg mx-auto">
        <FAQList faqs={FAQsSection.faqs} />
      </div>
    </section>
  );
};

export default FAQs;
