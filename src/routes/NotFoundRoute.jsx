import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import NotFoundIcon from "../assets/images/not-found-icon.png";
import { SiteName } from "../config";

const NotFoundRoute = () => {
  const [searchParams] = useSearchParams();
  const btnLabel = searchParams.get("btn-label");
  const link = searchParams.get("link");
  const mainLabel = searchParams.get("main-label");

  useEffect(() => {
    document.title = `${SiteName} | ${mainLabel || "Page Not Found"}`;
  }, []);

  return (
    <section className="container h-full pt-24">
      <div className="h-full flex flex-col justify-center items-center gap-24 md:flex-row">
        <img src={NotFoundIcon} alt="Not Found Error" className="mx-auto w-9/12 max-w-sm md:w-auto" />
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="mb-8 text-5xl font-bold">{mainLabel ?? "OOPS! Page Not Found"}</h1>
          <Link to={btnLabel && link ? link : "/"} className="btn btn-primary btn-wide">
            {btnLabel && link ? btnLabel : "Back To Home"}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundRoute;
