import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const Menu = () => {
  const [pasta, setPasta] = useState([]);
  const [category, setCategory] = useState("dessert");

  // 👇 ДОБАВИЛ
  const categories = [
    "appetizers",
    "pasta",
    "pizzas",
    "salad",
    "soup",
    "dessert",
  ];
  const [index, setIndex] = useState(5);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/${category}`)
      .then((response) => {
        setPasta(response.data || []);
        console.log(response.data);
      })
      .catch((err) => console.error(err));
  }, [category]);

  // 👇 ДОБАВИЛ (синхронизация)
  useEffect(() => {
    setCategory(categories[index]);
  }, [index]);

  return (
    <section className="bg-[#CFD2C6]">
      <div className="text-center text-2xl font-bold p-[20px]">Menu</div>
      <div className="text-center text-l font-bold max-w-xl mx-auto mb-8 mt-8 text-gray-700">
        Lacus lobortis nullam nam consectetur fermentum mattis pellentesque id
        nulla. Risus convallis iaculis risus ac aliquam sit ultricies.
        Adipiscing adipiscing pellentesque tincidunt vitae . Aliquam dolor
        egestas nam congue elit dolor.
      </div>

      <div className="flex w-full h-[60px] justify-center items-center text-black font-bold">
        <ul className="flex gap-10">
          <li
            onClick={() => setCategory("appetizers")}
            className="border rounded-xl px-4 py-1 transition-all duration-300 hover:bg-green-600 hover:text-white hover:scale-105 cursor-pointer"
          >
            Appetizers
          </li>
          <li
            onClick={() => setCategory("pasta")}
            className="border rounded-xl px-4 py-1 transition-all duration-300 hover:bg-green-600 hover:text-white hover:scale-105 cursor-pointer"
          >
            Pasta
          </li>
          <li
            onClick={() => setCategory("pizzas")}
            className="border rounded-xl px-4 py-1 transition-all duration-300 hover:bg-green-600 hover:text-white hover:scale-105 cursor-pointer"
          >
            Pizza
          </li>
          <li
            onClick={() => setCategory("salad")}
            className="border rounded-xl px-4 py-1 transition-all duration-300 hover:bg-green-600 hover:text-white hover:scale-105 cursor-pointer"
          >
            Salads
          </li>
          <li
            onClick={() => setCategory("soup")}
            className="border rounded-xl px-4 py-1 transition-all duration-300 hover:bg-green-600 hover:text-white hover:scale-105 cursor-pointer"
          >
            Soups
          </li>
          <li
            onClick={() => setCategory("dessert")}
            className="border rounded-xl px-4 py-1 transition-all duration-300 hover:bg-green-600 hover:text-white hover:scale-105 cursor-pointer"
          >
            Desserts
          </li>
        </ul>
      </div>

      <div className="mx-8 flex gap-10 justify-center items-start mt-10">
        <button
          onClick={() =>
            setIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1))
          }
          className="w-10 h-10 rounded-full border mt-40 border-gray-400 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition"
        >
          <FaArrowLeft size={12} />
        </button>

        {pasta.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <img
              className="w-70 h-100 object-cover"
              src={product.image?.trim()}
              alt="Product image"
            />
            <p className="mt-3 font-semibold">{product.name}</p>
            <p className="text-gray-600">{product.price}$</p>
          </div>
        ))}

        <button
          onClick={() =>
            setIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1))
          }
          className="w-10 h-10 mt-40 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition"
        >
          <FaArrowRight size={12} />
        </button>
      </div>
    </section>
  );
};

export default Menu;
