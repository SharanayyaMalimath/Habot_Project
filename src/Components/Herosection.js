import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { RiShoppingBag4Fill } from "react-icons/ri";
import Banner from "../Images/Banner.png";

const Herosection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[602px]"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#072F57] via-[#072F57] to-[#072F57] opacity-75"></div>
      <div className="relative container mx-auto px-4 py-20 md:py-40 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Are You a Supplier?
        </h1>
        <p className="text-2xl md:text-3xl mb-8">
          Explore Matching Opportunities.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center mb-4">
          <div className="flex items-center bg-white text-gray-600 rounded-md mb-4 md:mb-0 md:mr-4 w-full md:w-auto">
            <RiShoppingBag4Fill className="ml-4 text-[#E7760d]" />
            <input
              type="text"
              placeholder="Search your required service here"
              className="w-full px-4 py-2 focus:outline-none"
            />
          </div>
          <div className="flex items-center bg-white text-gray-600 rounded-md mb-4 md:mb-0 md:mr-4 w-full md:w-auto">
            <IoLocationSharp className="ml-4 text-[#E7760d]" />
            <input
              type="text"
              placeholder="Search your desired location here"
              className="w-full px-4 py-2 focus:outline-none"
            />
          </div>
          <button className="bg-[#00732F] text-white px-6 py-2 rounded-md transition duration-300">
            Search
          </button>
        </div>
        <p className="text-sm md:text-base">
          Are you a buyer?{" "}
          <a href="#" className="underline">
            Click here if you are looking to post a requirement
          </a>
        </p>
      </div>
    </div>
  );
};

export default Herosection;
