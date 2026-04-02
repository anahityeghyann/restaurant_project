import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FiShoppingCart } from "react-icons/fi";

const MenuCard = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/${category}/${id}`)
      .then((res) => {
        setItem(res.data);
      })
      .catch((err) => console.error("Item not found", err));
  }, [category, id]);

  if (!item) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="bg-[#CFD2C6] min-h-screen p-10 flex flex-col items-center">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 self-start px-5 py-2 border border-[#36392D] rounded-full hover:bg-[#36392D] hover:text-white transition"
      >
        ← Back to Menu
      </button>
      <div className="w-[90%] max-w-6xl h-auto md:h-[550px] bg-white shadow-2xl rounded-xl flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-5">
          <img
            src={item.image}
            alt={item.name}
            className="h-full max-h-[450px] object-contain rounded-lg"
          />
        </div>
        <div className="p-10 flex flex-col justify-between text-[#36392D] md:w-1/2">
          <h1 className="text-3xl font-bold capitalize">{item.name}</h1>

          <div className="flex flex-wrap gap-5 items-center mt-4">
            <h2 className="text-4xl font-bold text-[#36392D]">
              {item.price} <span className="text-[#7a825f] text-2xl">USD</span>
            </h2>
            <div className="flex w-[130px] h-[50px] justify-between items-center bg-[#d7e2b0] px-5 rounded-lg font-semibold text-[#36392D]">
              <button 
                className="cursor-pointer text-xl hover:text-green-800"
                onClick={() => setCount(prev => Math.max(0, prev - 1))}
              >
                -
              </button>
              <span className="text-lg">{count}</span>
              <button 
                className="cursor-pointer text-xl hover:text-green-800"
                onClick={() => setCount(prev => prev + 1)}
              >
                +
              </button>
            </div>
            <button className="flex h-[50px] px-6 justify-center gap-3 rounded-lg items-center bg-[#36392D] text-[#d7e2b0] hover:opacity-90 transition-opacity">
              <FiShoppingCart /> To cart
            </button>
          </div>

          <hr className="border-gray-200 my-6" />
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold">Ingredients</h2>
            <p className="text-gray-600 leading-relaxed">
              {item.ingredients || 
                "Fresh seasonal ingredients, prepared according to our traditional family recipe with authentic spices and herbs."}
            </p>
          </div>

          <hr className="border-gray-200 my-6" />
          <div>
            <h2 className="text-lg font-semibold">
              Category: <span className="capitalize font-normal text-[#7a825f]">{category}</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;