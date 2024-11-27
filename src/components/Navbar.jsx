import React from "react";
import { FaBars } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { ServiceLinks } from "../config";
import { useAuthContext } from "../contexts/AuthContext";
import Logo from "./Logo";

const Navbar = () => {
  const { user, logout } = useAuthContext();

  return (
    <div className="sticky top-0 left-0 z-20 bg-base-100 shadow-md">
      <div className="container">
        <nav className="navbar px-0">
          <div className="navbar-start">
            <Logo className="[&>div]:hidden [&_.slogan]:hidden xs:[&>div]:flex lg:[&_.slogan]:inline" />
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="menu md:menu-horizontal px-1">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="dropdown dropdown-hover">
                <Link to={"#services"}>Services</Link>
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
              <div tabIndex={0} role="button" className="btn btn-ghost btn-sm sm:btn-md">
                <FaBars className="text-lg" />
              </div>
              <ul tabIndex={0} className="dropdown-content menu menu-sm bg-base-100 rounded-box z-[1] shadow">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <Link to={"#services"}>Services</Link>
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
            {user ? (
              <>
                <Link to={"/profile"} className="avatar tooltip tooltip-bottom" data-tip={user.displayName}>
                  <div className="w-8 rounded-full sm:w-12">
                    {user.photoURL ? (
                      <img src={user.photoURL} referrerPolicy="no-referrer" alt={user.displayName} />
                    ) : (
                      <div className="w-full h-full flex justify-center items-center bg-neutral text-neutral-content rounded-full">
                        <span className="text-lg sm:text-2xl">
                          {user.displayName
                            .split(" ")
                            .map((part) => part[0].toUpperCase())
                            .join("")}
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
                <button className="btn btn-neutral btn-sm sm:btn-md" onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="btn btn-neutral btn-sm sm:btn-md">
                Login
              </Link>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
