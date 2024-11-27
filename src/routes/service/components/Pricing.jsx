import React, { useState } from "react";

const Pricing = ({ heading, subHeading, basePrice, baseDuration, availability, customizationOptions, cta }) => {
  const [customizations, setCustomizations] = useState(
    customizationOptions.map((option) => ({
      ...option,
      enabled: false,
    }))
  );

  const calculateTotalPrice = () => {
    let totalPrice = basePrice;
    customizations.forEach((option) => {
      if (option.enabled) totalPrice += option.priceAdjustment;
    });
    return totalPrice;
  };

  const toggleOption = (index) => {
    setCustomizations((prev) =>
      prev.map((option, i) => (i === index ? { ...option, enabled: !option.enabled } : option))
    );
  };

  return (
    <section id="pricing" className="bg-base-200 py-12 text-base-content/80" data-aos="fade-right" data-aos-once>
      <div className="container">
        <h2 className="mb-2 text-4xl font-bold text-center">{heading}</h2>
        <p className="mb-6 text-center">{subHeading}</p>
        <div className="mb-6 text-center">
          <p className="text-5xl font-extrabold text-primary">${calculateTotalPrice()}</p>
          <p className="text-lg mt-2">{baseDuration}</p>
          <p className="text-md">{availability}</p>
        </div>
        <div className="mx-auto max-w-screen-md mb-6 space-y-6">
          <h3 className="text-xl font-semibold">Customize Your Plan:</h3>
          {customizations.map((option, index) => (
            <div key={index} className="flex items-center justify-between border-b border-gray-300 pb-4">
              <div>
                <h4 className="text-lg font-semibold">{option.name}</h4>
                <p>{option.description}</p>
              </div>
              <div className="flex">
                <p className="text-primary font-bold">+${option.priceAdjustment}</p>
                <input
                  type="checkbox"
                  className="toggle toggle-primary ml-4"
                  checked={option.enabled}
                  onChange={() => toggleOption(index)}
                  name={option.name.replace(" ", "-")}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            className="btn btn-primary btn-lg mt-8"
            onClick={() => document.getElementById("service-confirm-modal").showModal()}
          >
            {cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
