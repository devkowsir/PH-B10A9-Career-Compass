import React from "react";
import Banner from "./components/Banner";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";

const HomeRoute = () => {
  return (
    <div>
      <Banner />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <FAQs />
    </div>
  );
};

export default HomeRoute;
