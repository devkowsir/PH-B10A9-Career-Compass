import React from "react";
import { Link } from "react-router-dom";
import { SiteName, SiteSlogan } from "../config";
import { FaCompass } from "react-icons/fa6";

const Logo = ({ className }) => {
  return (
    <Link to={"/"} className={`flex items-center gap-2 ${className}`}>
      <FaCompass className="logo text-4xl text-primary" />
      <div className="flex flex-col text-left">
        <span className="name text-xl font-bold">{SiteName.replace(" ", "")}</span>
        <span className="slogan w-max text-xs text-base-content/60">{SiteSlogan}</span>
      </div>
    </Link>
  );
};

export default Logo;
