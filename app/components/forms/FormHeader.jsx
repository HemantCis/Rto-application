// components/FormHeaderStacked.jsx
import Image from 'next/image';
import React from 'react';
import logoWhite from '../../../public/images/LogoWhite.png';
import logo from '../../../public/images/LogoBlack.png';
export default function FormHeaderStacked({mode = "light"}) {

  const variant = {
    "dark" :  {
      bg: "bg-[#4b599b]",
      title: "text-white",
      text: "text-gray-200",
      img: logoWhite
    },
    "light": {
      bg: "bg-white",
      title: "text-gray-900",
      text: "text-gray-600",
      img: logo
    }
    
  }

  return (
    <div className={`w-full rounded-lg pt-2 pb-4 ${variant[mode].bg}`}>
      <div className=" mx-auto px-4 sm:px-6">
        <div className="flex md:flex-col justify-center items-center sm:mb-4">
          <div className="sm:w-28 w-18 sm:h-28 h-18 relative">
            <Image
              src={logoWhite}
              alt="Outdoor Credit Inc Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className={`text-xl sm:text-3xl font-bold md:-mt-2 text-center ${variant[mode].title}`}>
            OUTDOOR CREDIT INC
          </h1>
        </div>

        <div className="flex items-center justify-center sm:justify-between sm:gap-2 flex-wrap">
          <p className={`text-xs sm:text-base font-medium ${variant[mode].text}`}>
            Address: 1135 NW 23rd Ave, Gainesville, Florida 32609
          </p>
          <p className={`text-xs sm:text-base font-medium ${variant[mode].text}`}>
            Phone: 877-228-0125
          </p>
        </div>
      </div>
    </div>
  );
}