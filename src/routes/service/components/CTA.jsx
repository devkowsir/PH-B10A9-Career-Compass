import React from "react";
import { Link } from "react-router-dom";

const CTA = ({ heading, subHeading, ctaButtonText, ctaButtonLink }) => {
  return (
    <section className="py-12 bg-primary text-white text-center shadow-md">
      <div className="container">
        <h2 className="text-4xl font-bold mb-4">{heading}</h2>
        <p className="text-lg mb-6">{subHeading}</p>
        <Link to={ctaButtonLink} className="btn btn-accent btn-lg text-lg font-semibold">
          {ctaButtonText}
        </Link>
      </div>
    </section>
  );
};

export default CTA;
