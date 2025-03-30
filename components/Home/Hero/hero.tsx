import React from "react";
import Image from "next/image";

const hero = () => {
  return (
    <div className="h-full pt-24 w-full  bg-[#ffffff]">
      <div className="flex justify-center align-items-center flex-col w-[90%] h-[50%] sm:w-[80%] mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-12 ">
          {/* image content */}
          <div className="hidden object-fill-cover bg-red-100 lg:block">
            <img
              src="/images/tutor-link-black.png"
              alt="hero for tutor link"
              width={900}
              height={800}
              className="onbject-contain"
            />
          </div>
          {/* text content */}
          <div className="flex flex-col items-center justify-center space-y-6">
            {/* heading */}
            <h1 className="text-2xl  text-[#222a36] sm:text:4xl md:text-5xl mt-6 mx-10 md:mx-1 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem]  text-center">
              Lorem, ipsum dolor sit elit. dolores eveniet suscipit! Lorem ipsum
              dolor sit.
            </h1>
            <div className="w-fit py-6 px-2 md:px-5 rounded-full shadow-md flex item-center space-x-3 bg-white">
              <div className="py-3 md:px-10 md:py-1 px-10  rounded-full bg-blue-700 md:text-base sm:text-sm text-xs text-white">
                <p className="text-center">Tutor Link</p>
              </div>{" "}
              <div className="py-3 md:px-10 md:py-1 px-10  rounded-full bg-blue-700 md:text-base sm:text-sm text-xs text-white">
                <p className="text-center">Tutor Link</p>
              </div>
              {/* <p className="text-xs text-[#222a36] sm:text-sm px-4 py-2">
                Lorem ipsum dolor,accusantium.
              </p> */}
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
