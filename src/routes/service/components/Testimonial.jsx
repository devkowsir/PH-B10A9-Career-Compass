import React from "react";

const Testimonials = ({ heading, subHeading, testimonials }) => {
  return (
    <section id="counselor" className="bg-base-200 py-12" data-aos="slide-up" data-aos-once>
      <div className="container text-base-content/75 text-center">
        <h2 className="mb-2 text-4xl">{heading}</h2>
        <p className="mb-12 text-lg">{subHeading}</p>

        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="md:max-w-xs flex flex-col items-center bg-base-200 p-6 rounded-lg shadow-md">
              <img src={testimonial.image} alt={testimonial.user} className="w-24 h-24 rounded-full shadow-lg mb-4" />
              <p className="italic text-center text-gray-700">"{testimonial.quote}"</p>
              <p className="mt-4 text-primary font-bold">{testimonial.user}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
