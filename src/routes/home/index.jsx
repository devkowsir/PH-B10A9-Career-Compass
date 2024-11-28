import React, { useEffect } from "react";
import Banner from "./components/Banner";
import FAQs from "./components/FAQs";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import { SiteName } from "./config";

const HomeRoute = () => {
  useEffect(() => {
    document.title = `${SiteName} | Home`;
  }, []);

  return (
    <>
      <Banner />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <FAQs />
    </>
  );
};

export default HomeRoute;
