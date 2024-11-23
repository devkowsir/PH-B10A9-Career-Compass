import React from "react";
import { TestimonialsSection } from "../config";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="mb-24 py-12 bg-base-100 text-base-content bg-cover"
      style={{ backgroundImage: `url(${TestimonialsSection.image})` }}
    >
      <div className="container bg-base-100/80 rounded-lg p-8">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-2">{TestimonialsSection.heading}</h2>
        <p className="text-lg text-gray-600 text-center mb-10">"Real Stories of Success from Our Satisfied Clients"</p>

        {/* Testimonials Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {TestimonialsSection.testimonials.map((testimonial, index) => (
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
