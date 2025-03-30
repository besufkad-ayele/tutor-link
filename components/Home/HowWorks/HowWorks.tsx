import React from "react";
import HowChooseCard from "./HowChooseCard";

const HowWorks = () => {
  return (
    <div className="pt16 pb-24  bg-gray-900 h-[1/2] flex justify-center align-middle flex-col flex-wrap">
      <div className="flex flex-col items-center justify-center text-center ">
        <h1
          className="pt-16 text-4xl capitalize text-blue-950 font-bold"
          style={{ fontFamily: "Arial, sans-serif", color: "#1E3A8A" }}
        >
          How it{" "}
          <span
            className="font-bold italic"
            style={{ fontFamily: "Georgia, serif" }}
          >
            works
          </span>
        </h1>
        <p className="text-lg text-amber-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="pt16 pb-4  bg-gray-900 h-[1/2] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <HowChooseCard
          step={1}
          step1={"first register your account"}
          step2={"are you a tutor or parent?"}
          step3={"if you are a parent, please register your child"}
          step4={"if you are a tutor, please register your account"}
          card_title={"continue to authentication"}
        />
        <HowChooseCard
          step={2}
          step1={"Autentication and validation"}
          step2={"if you are a parent or Tutor, please upload your ID"}
          step3={"if you are a parent, please upload your child's ID"}
          step4={"if you are a tutor, please upload your ID"}
          card_title={"continue to payment"}
        />
        <HowChooseCard
          step={3}
          step1={"Payment"}
          step2={"✅ if you are a parent or Tutor, please upload your ID"}
          step3={"✅ if you are a parent, please upload your child's ID"}
          step4={"✅ if you are a tutor, please upload your ID"}
          card_title={"continue to Dashboard"}
        />
        <HowChooseCard
          step={4}
          step1={"✅ Contiune to Dashboard "}
          step2={"✅ if you are a parent or tutor, sign in to your account"}
          step3={"✅ if you are a Student, please  sign in to your account"}
          step4={""}
          card_title={"Enjoy Your time !"}
        />
      </div>
    </div>
  );
};

export default HowWorks;
