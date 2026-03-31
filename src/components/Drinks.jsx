import React from "react";
import coctail from "../assets/drink1.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Drinks = () => {
  return (
    <div className="w-full h-screen bg-[#CFD2C6] flex items-center justify-center">
      <div className="w-[1200px] flex justify-between items-center">
        <div className="relative">
          <img
            src={coctail}
            alt="cocktail"
            className="w-[420px] h-[520px] object-cover"
          />
          <div className="mt-4">
            <h3 className="text-sm font-semibold">Midnight Craze</h3>
            <span className="text-xs text-gray-500">$8</span>
            <p className="text-xs text-gray-500 mt-2 w-[350px]">
              2 oz silver tequila, 1 oz cointreau, 1 oz lime juice, salt for the rim
            </p>
          </div>
          <div className="absolute right-[-70px] bottom-[120px] flex flex-col gap-4">
            <button className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition">
              <FaArrowLeft size={12} />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition">
              <FaArrowRight size={12} />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <div>
            <h1 className="text-5xl font-bold text-[#9FA68C]">
              Wine
            </h1>
            <div className="h-[1px] bg-[#9FA68C] mt-4 w-[350px]"></div>
          </div>
          <div>
            <h1 className="text-6xl font-bold text-[#36392D]">
              Cocktails
            </h1>
            <div className="h-[1px] bg-[#9FA68C] mt-4 w-[350px]"></div>
          </div>
          <div>
            <h1 className="text-5xl font-bold text-[#9FA68C]">
              Beer
            </h1>
            <div className="h-[1px] bg-[#9FA68C] mt-4 w-[350px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drinks;