import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Counselor from "./components/Counselor";
import Hero from "./components/Hero";
import KeyFeatures from "./components/KeyFeatures";
import Overview from "./components/Overview";
import Pricing from "./components/Pricing";
import { Services } from "./config";

const ServiceRoute = () => {
  const { slug } = useParams();
  const ServiceData = Services.find((service) => slug == service.slug);

  if (!ServiceData) return <Navigate to={"/service-not-found"} replace />;

  return (
    <>
      <Hero {...ServiceData.heroSection} />
      <Overview {...ServiceData.overviewSection} />
      <KeyFeatures {...ServiceData.keyFeaturesSection} />
      <Pricing {...ServiceData.pricingSection} />
      <Counselor {...ServiceData.counselorSection} />
    </>
  );
};

export default ServiceRoute;
