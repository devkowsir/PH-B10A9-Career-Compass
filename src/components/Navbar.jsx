import React from "react";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ServiceLinks } from "../config";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-md px-4">
      <nav className="container navbar">
        <div className="navbar-start">
          <Logo />
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu md:menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="dropdown dropdown-hover">
              <a href={"/#services"}>Services</a>
              <ul className="dropdown-content menu z-[2] p-2 ml-0 *:w-max bg-base-100 rounded-box shadow">
                {ServiceLinks.map(({ slug, shortName }) => (
                  <li key={slug}>
                    <Link to={`/services/${slug}`}>{shortName}</Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <div className="dropdown dropdown-end md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <FaBars className="text-lg" />
            </div>
            <ul tabIndex={0} className="dropdown-content menu menu-sm bg-base-100 rounded-box z-[1] shadow">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={"/#services"}>Services</Link>
                <ul className="menu menu-sm pt-0 w-max before:top-1">
                  {ServiceLinks.map(({ slug, shortName }) => (
                    <li key={slug}>
                      <Link to={`/services/${slug}`}>{shortName}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
          <Link to="/login" className="btn btn-neutral">
            Login
          </Link>
          <Link to="/register" className="hidden btn btn-primary sm:flex">
            Register
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
