import React from "react";

const KeyFeatures = ({ heading, subHeading, features }) => {
  return (
    <section id="key-features">
      <div className="container text-base-content/75 text-center">
        <h2 className="text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="text-lg text-center mb-12">{subHeading}</p>
        <ul className="max-w-screen-lg mx-auto flex flex-col gap-8 xs:text-left md:flex-row">
          {features.map(({ title, description, icon }, i) => (
            <li
              key={i}
              className="flex-1 flex flex-col items-center gap-4 xs:items-start xs:flex-row md:flex-col md:text-center md:items-center"
            >
              <img src={icon} alt="" className="max-w-32 p-4 bg-base-200 rounded-md" />
              <div className="h-full">
                <h3 className="mb-2 text-lg font-bold sm:mb-4">{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default KeyFeatures;
