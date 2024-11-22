import React from "react";
import Banner from "../components/Banner";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";

const HomeRoute = () => {
  return (
    <div>
      <Banner />
      <WhyChooseUs />
      <Services />
    </div>
  );
};

export default HomeRoute;
