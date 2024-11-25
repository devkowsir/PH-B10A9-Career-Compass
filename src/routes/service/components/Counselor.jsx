import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";

const Counselor = ({ heading, subHeading, name, bio, image, socialMedia }) => {
  return (
    <section id="counselor" data-aos="slide-up" data-aos-once>
      <div className="container text-base-content/75 text-center">
        <h2 className="mb-2 text-4xl">{heading}</h2>
        <p className="mb-12 text-lg">{subHeading}</p>

        <div className="max-w-screen-xs mx-auto card md:card-side bg-base-100 shadow-xl md:max-w-screen-md">
          <figure>
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </figure>
          <div className="card-body text-left">
            <h3 className="card-title">{name}</h3>
            <p>{bio}</p>
            <div className="mt-4 card-actions text-2xl text-primary">
              <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href={socialMedia.linkedIn} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counselor;
