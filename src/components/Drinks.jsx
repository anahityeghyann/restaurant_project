import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import axios from "axios";

const Drinks = () => {
  const [category, setCategory] = useState("wine");
  const [drinks, setDrinks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/${category}`)
      .then((response) => {
        setDrinks(response.data);
        setCurrentIndex(0); 
      })
      .catch((err) => console.log(err));
  }, [category]);

  const nextSlide = () => {
    if (drinks.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % drinks.length);
  };

  const prevSlide = () => {
    if (drinks.length === 0) return;
    setCurrentIndex((prev) =>
      prev === 0 ? drinks.length - 1 : prev - 1
    );
  };

  const currentDrink = drinks[currentIndex];

  return (
    <div className="w-full h-screen bg-[#CFD2C6] flex items-center justify-center">
      <div className="w-[1200px] flex justify-between items-center">

      
        <div className="relative">
          {currentDrink && (
            <>
              <img
                src={currentDrink.image}
                alt={currentDrink.name}
                className="w-[420px] h-[520px] object-cover"
              />

              <div className="mt-4 text-center">
                <h3 className="text-sm font-semibold">
                  {currentDrink.name}
                </h3>
                <span className="text-xs text-gray-500">
                  ${currentDrink.price}
                </span>
                <p className="text-xs text-gray-500 mt-2 w-[350px] mx-auto">
                  {currentDrink.description}
                </p>
              </div>
            </>
          )}

        
          <div className="absolute right-[-70px] bottom-[120px] flex flex-col gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition"
            >
              <FaArrowLeft size={12} />
            </button>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition"
            >
              <FaArrowRight size={12} />
            </button>
          </div>
        </div>

      
        <div className="flex flex-col gap-12">

          
          <div onClick={() => setCategory("wine")} className="cursor-pointer">
            <h1
              className={`font-bold transition-all duration-300 ${
                category === "wine"
                  ? "text-6xl scale-110 text-[#36392D]"
                  : "text-4xl text-[#9FA68C]"
              }`}
            >
              Wine
            </h1>
            <div className="h-[1px] bg-[#9FA68C] mt-4 w-[350px]"></div>
          </div>

        
          <div onClick={() => setCategory("cocktails")} className="cursor-pointer">
            <h1
              className={`font-bold transition-all duration-300 ${
                category === "cocktails"
                  ? "text-6xl scale-110 text-[#36392D]"
                  : "text-4xl text-[#9FA68C]"
              }`}
            >
              Cocktails
            </h1>
            <div className="h-[1px] bg-[#9FA68C] mt-4 w-[350px]"></div>
          </div>

      
          <div onClick={() => setCategory("beer")} className="cursor-pointer">
            <h1
              className={`font-bold transition-all duration-300 ${
                category === "beer"
                  ? "text-6xl scale-110 text-[#36392D]"
                  : "text-4xl text-[#9FA68C]"
              }`}
            >
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
      </div>
    </div>
  );
};

export default Drinks;
