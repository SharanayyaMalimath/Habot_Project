import React, { useState } from "react";
import Buyer from "../Images/Buyer.jpeg";

const Thirdsection = () => {
  const [activeTab, setActiveTab] = useState("Buyer");
  return (
    <div>
      <div className="md:flex justify-center items-center mt-10 md:mt-20 bg-blue-900 h-auto md:h-[623px] mx-4 md:mx-16 rounded-md">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="relative">
            <img
              src={Buyer}
              alt="Buyer"
              className="w-full md:w-[640px] md:h-[350px] rounded-md"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-red-600 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[75px] w-[106px] text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-4.197-2.625a1 1 0 00-1.555.832v5.25a1 1 0 001.555.832l4.197-2.625a1 1 0 000-1.664z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-white py-4  md:py-0 px-4 md:px-20">
          <div className="flex justify-between items-center mb-4">
            <h2
              className={`text-xl font-bold cursor-pointer ${
                activeTab === "Buyer"
                  ? "text-[#EB7150] border-b-4 border-[#EB7150]"
                  : "text-white"
              }`}
              onClick={() => setActiveTab("Buyer")}
            >
              Buyer
            </h2>
            <div className="ml-4 md:ml-20 mt-1 w-32"></div>
            <h2
              className={`text-xl font-bold cursor-pointer ${
                activeTab === "Supplier"
                  ? "text-[#EB7150] border-b-4 border-[#EB7150]"
                  : "text-white"
              }`}
              onClick={() => setActiveTab("Supplier")}
            >
              Supplier
            </h2>
          </div>
          {activeTab === "Buyer" && (
            <ul className="list-none">
              <li className="mb-2">
                <span role="img" aria-label="check">
                  ✅
                </span>{" "}
                Post your requirements.
              </li>
              <li className="mb-2">
                <span role="img" aria-label="check">
                  ✅
                </span>{" "}
                Sit back for multiple suppliers to contact you.
              </li>
              <li>
                <span role="img" aria-label="check">
                  ✅
                </span>{" "}
                Choose among the suppliers based on the ratings and reviews.
              </li>
            </ul>
          )}
          {activeTab === "Supplier" && (
            <ul className="list-none">
              <li className="mb-2">
                <span role="img" aria-label="check">
                  ✅
                </span>{" "}
                Register your business.
              </li>
              <li className="mb-2">
                <span role="img" aria-label="check">
                  ✅
                </span>{" "}
                Respond to buyer requirements.
              </li>
              <li>
                <span role="img" aria-label="check">
                  ✅
                </span>{" "}
                Get ratings and reviews from buyers.
              </li>
            </ul>
          )}
        </div>
      </div>
      <div id="findSup" className="flex justify-between items-center bg-[#E8FBFF] h-60 px-4 md:px-32 mt-10  md:mt-20  ">
        <div className="text-[#000000] text-md  md:text-2xl font-semibold">
          Let Suppliers Find You
          <div className=" mt-1 border-b-4 border-[#EB7150] w-32"></div>
        </div>
        <button className="bg-[#EB7150] text-white py-2 px-4 rounded">
          Get Verified
        </button>
      </div>
    </div>
  );
};

export default Thirdsection;
