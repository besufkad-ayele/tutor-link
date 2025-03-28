import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const whychoose = () => {
  return (
    <div className="py-16 pb-16 bg-gray-800">
      <h1 className="text-2xl md:text-4xl font-extrabold text-center text-white items-center">
        Why Choose Tutor Link?
      </h1>
      <p className="mt-4 text-center text-gray-600 text-lg">
        Discover the benefits of learning with us.
      </p>
      <div className="mt-12 grid w-[90%] mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-8">
        <WhyChooseCard
          image="/images/i1.png"
          title="Expert Tutors"
          linkText="Learn More ➡️"
        />
        <WhyChooseCard
          image="/images/i2.png"
          title="Personalized Learning"
          linkText="Learn More ➡️"
        />
        <WhyChooseCard
          image="/images/i3.png"
          title="Flexible Scheduling"
          linkText="Learn More ➡️"
        />
        <WhyChooseCard
          image="/images/drink.png"
          title="Affordable Pricing"
          linkText="Learn More ➡️"
        />
      </div>
    </div>
  );
};

export default whychoose;
