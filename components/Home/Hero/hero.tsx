import React from "react";
import Image from "next/image";

const hero = () => {
  return (
    <div className="h-screen ">
      <div className="w-full pt-[4vh] md:pt-[12vh] h-screen  bg-p[#f7f8fb]">
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
              <div className="w-fit py-4 px-2 md:px-5 rounded-full shadow-md flex item-center space-x-3 bg-white">
                <div className="py-3 py-1 md:px-5 md:py-1 rounded-full bg-blue-700 md:text-base sm:text-sm text-xs text-white">
                  <p className="text-center">Tutor Link</p>
                </div>
                <p className="text-xs sm:text-sm">
                  Lorem ipsum dolor,accusantium.
                </p>
              </div>{" "}
              {/* heading */}
              <h1 className="text-2xl sm:text:4xl md:text-5xl mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem]">
                Lorem, ipsum dolor sit elit. sed dolores eveniet suscipit!
              </h1>
              <p className="text-gray-500">
                laboriosam suscipit, fuga ratione sed tenetur omnis similique
              </p>
              {/* image to be inserted */}
              <div className="flex mt-8 mb-8 item-center space-x-4">
                <img
                  src="/images/drink.png"
                  alt="hero for tutor link"
                  width={400}
                  height={150}
                  className="onbject-contain"
                />
                <img
                  src="/images/camera.jpg"
                  alt="hero for tutor link"
                  width={200}
                  height={50}
                  className="onbject-contain"
                />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
