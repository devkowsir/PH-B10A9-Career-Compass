import React from "react";
import NotFoundIcon from "../assets/images/not-found-icon.png";
import { Link } from "react-router-dom";

const NotFoundRoute = () => {
  return (
    <section className="container h-full pt-24">
      <div className="h-full flex flex-col justify-center items-center gap-24 md:flex-row">
        <img src={NotFoundIcon} alt="Not Found Error" className="mx-auto w-9/12 max-w-sm md:w-auto" />
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="mb-8 text-5xl font-bold">OOPS! PAGE NOT FOUND</h1>
          <Link to={"/"} className="btn btn-primary btn-wide">
            Back To Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundRoute;
