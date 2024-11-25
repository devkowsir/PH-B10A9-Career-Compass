import React from "react";
import FAQList from "../../../components/FAQList";

const FAQs = ({ heading, subHeading, faqs }) => {
  return (
    <section id="faqs" className="container text-base-content/75" data-aos="slide-up" data-aos-once>
      <h2 className="text-4xl font-bold text-center mb-2">{heading}</h2>
      <p className="text-lg text-gray-600 text-center mb-12">{subHeading}</p>
      <div className="max-w-screen-lg mx-auto">
        <FAQList faqs={faqs} />
      </div>
    </section>
  );
};

export default FAQs;
