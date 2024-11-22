import React from "react";
import { Link } from "react-router-dom";
import { SiteSlogan } from "../config";

const Logo = ({ className }) => {
  return (
    <Link to={"/"}>
      <div className={`text-2xl font-bold ${className}`}>CareerCompass</div>
      <p className="hidden text-xs text-base-content/60 sm:block">{SiteSlogan}</p>
    </Link>
  );
};

export default Logo;
