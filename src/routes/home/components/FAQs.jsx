import React from "react";
import { FAQsSection } from "../config";
import FAQList from "../../../components/FAQList";

const FAQs = () => {
  return (
    <section className="container px-4 mb-24 bg-base-100">
      <h2 className="text-4xl font-bold text-center mb-4">{FAQsSection.heading}</h2>
      <p className="text-lg text-gray-600 text-center mb-10">{FAQsSection.subHeading}</p>
      <FAQList faqs={FAQsSection.faqs} />
    </section>
  );
};

export default FAQs;
