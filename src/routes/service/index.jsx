import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Counselor from "./components/Counselor";
import FAQs from "./components/FAQs";
import Hero from "./components/Hero";
import KeyFeatures from "./components/KeyFeatures";
import Overview from "./components/Overview";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonial";
import { Services } from "./config";

const ServiceRoute = () => {
  const { slug } = useParams();
  const ServiceData = Services.find((service) => slug == service.slug);

  if (!ServiceData) {
    const searchParams = new URLSearchParams({
      "main-label": "OOPS! Service Not FOUND",
      "btn-label": "Check Out Our Services",
      link: "/services",
    });
    return <Navigate to={`/not-found?${searchParams.toString()}`} replace />;
  }

  return (
    <>
      <Hero {...ServiceData.heroSection} />
      <Overview {...ServiceData.overviewSection} />
      <KeyFeatures {...ServiceData.keyFeaturesSection} />
      <Counselor {...ServiceData.counselorSection} />
      <Testimonials {...ServiceData.testimonialsSection} />
      <FAQs {...ServiceData.faqsSection} />
      <Pricing {...ServiceData.pricingSection} />
    </>
  );
};

export default ServiceRoute;
