import React from "react";
import { FaBars } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { ServiceLinks } from "../config";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 z-20 bg-base-100 shadow-md">
      <div className="container">
        <nav className="navbar px-0">
          <div className="navbar-start">
            <Logo />
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="menu md:menu-horizontal px-1">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="dropdown dropdown-hover">
                <NavLink to={"/service"}>Service</NavLink>
                <ul className="dropdown-content menu z-[2] p-2 ml-0 *:w-max bg-base-100 rounded-box shadow">
                  {ServiceLinks.map(({ slug, shortName }) => (
                    <li key={slug}>
                      <NavLink to={`/service/${slug}`}>{shortName}</NavLink>
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
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/service"}>Service</NavLink>
                  <ul className="menu menu-sm pt-0 w-max before:top-1">
                    {ServiceLinks.map(({ slug, shortName }) => (
                      <li key={slug}>
                        <NavLink to={`/service/${slug}`}>{shortName}</NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
            <NavLink to="/login" className="btn btn-neutral">
              Login
            </NavLink>
            <NavLink to="/register" className="hidden btn btn-primary sm:flex">
              Register
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
