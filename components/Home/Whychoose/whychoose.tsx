import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChooseSection = () => {
  return (
    <div className="py-16 pb-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center tracking-tight">
          Unlock Your Potential with Tutor Link
        </h2>
        <p className="mt-6 text-xl text-gray-500 text-center">
          Experience personalized and effective learning with our dedicated
          tutors.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          <WhyChooseCard
            image="/images/expert-tutors.svg" // Replace with a modern SVG icon
            title="Learn from the Best"
            description="Our tutors are experts in their fields, passionate about teaching and guiding you to success."
          />
          <WhyChooseCard
            image="/images/personalized-learning.svg" // Replace with a modern SVG icon
            title="Your Learning, Your Way"
            description="Enjoy a learning experience tailored to your individual needs and learning style."
          />
          <WhyChooseCard
            image="/images/flexible-schedule.svg" // Replace with a modern SVG icon
            title="Fit Learning into Your Life"
            description="Benefit from flexible scheduling options that adapt to your busy lifestyle."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
