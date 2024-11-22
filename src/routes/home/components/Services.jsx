import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "../../../components/Rating";
import { ServicesSection } from "../config";

const Services = () => {
  return (
    <section id="services" className="container flex flex-col px-4 pb-24 bg-base-100 text-base-content/75">
      {/* Right Side: Features */}
      <div className="w-full mt-8">
        <h2 className="text-4xl font-bold text-center mb-6">{ServicesSection.heading}</h2>
        <p className="text-lg text-center mb-8 text-base-content/75">{ServicesSection.subHeading}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {ServicesSection.cards.map((service) => (
            <div
              key={service.slug}
              className="card card-compact bg-base-100 shadow-xl transition-transform transform hover:scale-105"
            >
              <figure>
                <img src={service.image} alt={service.serviceName} className="aspect-video object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.serviceName}</h2>
                <p className="text-base">{service.description}</p>
                <p className="text-base-content">{service.duration}</p>
                <p className="text-base-content">Counselor: {service.counselor}</p>
                <div className="flex items-center">
                  <Rating maxRating={5} achievedRating={service.rating} />
                  <p className="text-primary text-center font-bold">${service.pricing}</p>
                  <Link to={`/services/${service.slug}`} className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
