import React from "react";
import Hero from "./Hero/hero";
import Nav from "./Navbar/Nav";
import Whychoose from "./Whychoose/whychoose";
import HowWorks from "./HowWorks/HowWorks";
import Contact from "./Contact/Contact";
import Feature from "./Feature/Feature";
import Review from "./Review/Review";
import ResponsiveNav from "./Navbar/ResponsiveNav";
import FeatureWrapper from "./Feature/FeatureWrapper";


const Home = () => {
  return (
    <div className="pt-24 h-screen">
      <Hero />

      <Whychoose />
      {/* <div className="p-4"></div> */}
      <HowWorks />

      <FeatureWrapper />

      <Review />

      <Contact />
    </div>
  );
};

export default Home;
