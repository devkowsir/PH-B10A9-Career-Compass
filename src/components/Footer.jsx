import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ServiceLinks } from "../config";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="py-12 bg-base-200 text-base-content">
      <footer className="container footer">
        <aside>
          <Logo className="[&>div>.slogan]:hidden lg:[&>div>.slogan]:inline" />
        </aside>
        <nav>
          <h6 className="footer-title">Pages</h6>
          <Link className="link link-hover" to={"/"}>
            Home
          </Link>
          <Link className="link link-hover" to={"/services"}>
            Services
          </Link>
          <Link className="link link-hover" to={"/bookings"}>
            Bookings
          </Link>
          <Link className="link link-hover" to={"/profile"}>
            Profile
          </Link>
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
          <Link className="link link-hover" to={"/#faqs"}>
            FAQs
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          {ServiceLinks.map(({ slug, shortName }) => (
            <Link className="link link-hover" to={`/service/${slug}`} key={slug}>
              {shortName}
            </Link>
          ))}
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="flex gap-4 md:flex-col lg:flex-row">
            <Link target="_blank">
              <FaTwitter className="text-2xl" />
            </Link>
            <Link target="_blank">
              <FaYoutube className="text-2xl" />
            </Link>
            <Link target="_blank">
              <FaFacebook className="text-2xl" />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
