import React from "react";
import Image from "next/image";

const hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen  bg-p[#f7f8fb]">
      <div className="flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 space-y-8">
          {/* image content */}
          <div className="hidden lg:block">
            <Image
              src="/images/tutor-link-black.png"
              alt="hero for tutor link"
              width={700}
              height={800}
            />
          </div>
          {/* text content */}
          <div className="w-fit py-4 px-2 md:px-5 rounded-full shadow-md flex item-center space-x-3 bg-white">
            <div className="py-3 py-1 md:px-5 md:py-1 rounded-full bg-blue-700 md:text-base sm:text-sm text-xs text-white">
              <p className="text-center">Tutor Link</p>
            </div>
            <p className="text-xs sm:text-sm">
              we have updated our term and condition policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
