import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";
import { ServiceLinks } from "../config";
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
          {ServiceLinks.map(({ slug, shortName }) => (
            <a className="link link-hover" href={`/service/${slug}`} key={slug}>
              {shortName}
            </a>
          ))}
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover" href={"/#why-choose-us"}>
            Why Choose Us
          </a>
          <a className="link link-hover" href={"/#services"}>
            Services
          </a>
          <a className="link link-hover" href={"/#testimonials"}>
            Testimonials
          </a>
          <a className="link link-hover" href={"/#faqs"}>
            FAQs
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a target="_blank">
              <FaTwitter className="text-2xl" />
            </a>
            <a target="_blank">
              <FaYoutube className="text-2xl" />
            </a>
            <a target="_blank">
              <FaFacebook className="text-2xl" />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
