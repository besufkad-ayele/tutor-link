import React from "react";
import Image from "next/image";

const hero = () => {
  return (
    <div className="h-screen w-full pt-[4vh] md:pt-[12vh] bg-[#f7f6fb]">
      <div className="flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 space-y-8">
          {/* image content */}
          <div className="hidden  lg:block">
            <img
              src="/images/tutor-link-black.png"
              alt="hero for tutor link"
              width={900}
              height={800}
              className="onbject-contain"
            />
          </div>{" "}
          {/* text content */}
          <div py-14>
            {/* heading */}
            <h1 className="text-2xl text-[#222a36] sm:text:4xl md:text-5xl mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem] align-middle">
              Lorem, ipsum dolor sit elit. sed dolores eveniet suscipit! Lorem ipsum dolor sit.
            </h1>
            <div className="w-fit py-4 px-2 md:px-5 rounded-full shadow-md flex item-center space-x-3 bg-white">
              <div className="py-3 py-1 md:px-5 md:py-1 rounded-full bg-blue-700 md:text-base sm:text-sm text-xs text-white">
                <p className="text-center">Tutor Link</p>
              </div>
              <p className="text-xs text-[#222a36] sm:text-sm">
                Lorem ipsum dolor,accusantium.
              </p>
            </div>
            {/* //todo image to be inserted */}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default hero;
