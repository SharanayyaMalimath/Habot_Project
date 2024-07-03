import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Secondsection = () => {
  return (
    <div className="container mx-auto px-4 md:px-20 mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Section */}
      <div>
        <h2 className="text-3xl text-[#000000] md:text-4xl font-bold mb-4">
          Ready to dive into <span className="text-[#271555]">HABOT?</span>
        </h2>
        <p className="text-lg text-[#000000] mb-6">
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </p>
        <button className=" flex items-center bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-300">
          Sign up Today ! <FaArrowRight className="ml-2 text-xl" />
        </button>
      </div>

      {/* Right Section */}
      <div className="grid grid-cols-2 gap-4">
        {[
          "Abu Dhabi",
          "Dubai",
          "Sharjah & Ajman",
          "Fujairah",
          "Ras Al Khaimah",
          "Umm Al Quwain",
        ].map((location) => (
          <button
            key={location}
            className="border h-[65px] border-[#E7760D] text-[#3E3E3E] py-2 px-4 rounded-md "
          >
            {location}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Secondsection;
