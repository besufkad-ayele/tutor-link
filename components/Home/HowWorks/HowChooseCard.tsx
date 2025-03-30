import { title } from "process";
import React from "react";

type Props = {
  step: number;
  step1: string;
  step2: string;
  step3: string;
  step4: string;
  card_title: string;
};
const HowChooseCard = ({
  card_title,
  step,
  step1,
  step2,
  step3,
  step4,
}: Props) => {
  return (
    <div>
      <div className=" gap-4 mx-8 mt-8">
        {/* Add your content here */}
        <div className="bg-[#b8abab0c] hover:shadow-md sm:shadow-2xl sm:shadow-gray-500  shadow-amber-50 p-4 rounded">
          <h2 className="text-xl lg:text-3xl font-semibold text-center pt-4">
            Step {step} 🚩
          </h2>
          <ul className=" text-yellow-100 text-md  list-inside py-4 px-auto  text-lg mt-8 mb-4 mx-4 ">
            <li className="text-lg  mt-2 ">{step1}</li>
            <li className="text-lg   mt-2  ">{step2}</li>
            <li className="text-lg    mt-2 ">{step3}</li>
            <li className="text-lg  mt-2 ">{step4}</li>
          </ul>
          <p className="text-gray-400 text-right hover:text-blue-600 text-sm lowercase ">
            {card_title}{" "}
            <span className="hover:text-xl hover:text-amber-950">➡️</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowChooseCard;
