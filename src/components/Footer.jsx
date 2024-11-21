import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ServicesSection } from "../assets/config";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="bg-base-200 text-base-content p-10">
      <footer className="container footer md:footer-">
        <aside className="gap-0">
          <Logo />
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          {ServicesSection.cards.map(({ slug, shortName }) => (
            <Link className="link link-hover" to={`/services/${slug}`} key={slug}>
              {shortName}
            </Link>
          ))}
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link className="link link-hover" to={"/#why-choose-us"}>
            Why Choose Us
          </Link>
          <Link className="link link-hover" to={"/#services"}>
            Services
          </Link>
          <Link className="link link-hover" to={"/#testimonials"}>
            Testimonials
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <Link>
              <FaTwitter className="text-2xl" />
            </Link>
            <Link>
              <FaYoutube className="text-2xl" />
            </Link>
            <Link>
              <FaFacebook className="text-2xl" />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
