import React from "react";
import Whychoose from "../../components/Home/Whychoose/whychoose";
import Hero from "../../components/Home/Hero/hero";
import HowWorks from "../../components/Home/HowWorks/HowWorks";
import FeatureWrapper from "../../components/Home/Feature/FeatureWrapper";
import Review from "../../components/Home/Review/Review";
import Contact from "../../components/Home/Contact/Contact";
import HeroSection from "@/components/ui/hero1/hero-section";
import Footer from "@/components/Home/Footer/Footer";
import TeamSection from "@/components/team";
import WhyChooseSection from "../../components/Home/Whychoose/whychoose";
const home = () => {
  return (
    <div className="">
      <div className="pt-24 h-screen bg-cyan-900">
        <Hero />
        <WhyChooseSection />
        <TeamSection />
        <Review />
        <Footer />
      </div>
    </div>
  );
};

export default home;
