import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const Menu = () => {

    const [pasta, setPasta] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/dessert")
            .then((response) => {
                setPasta(response.data)
                console.log(response.data);

            })
            .catch((err) => console.error(err))
    }, [])


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
                    <li className="border rounded-xl px-4 py-1 transition-all duration-300 hover:bg-green-600 hover:text-white hover:scale-105 cursor-pointer">
                        Appetizers
                    </li>
                    <li className="border rounded-xl px-4 py-1 transition-all duration-300 hover:bg-green-600 hover:text-white hover:scale-105 cursor-pointer">
                        Pasta
                    </li>
                    <li className="border rounded-xl px-4 py-1 transition-all duration-300 hover:bg-green-600 hover:text-white hover:scale-105 cursor-pointer">
                        Pizza
                    </li>
                    <li className="border rounded-xl px-4 py-1 transition-all duration-300 hover:bg-green-600 hover:text-white hover:scale-105 cursor-pointer">
                        Salads
                    </li>
                    <li className="border rounded-xl px-4 py-1 transition-all duration-300 hover:bg-green-600 hover:text-white hover:scale-105 cursor-pointer">
                        Soups
                    </li>
                    <li className="border rounded-xl px-4 py-1 transition-all duration-300 hover:bg-green-600 hover:text-white hover:scale-105 cursor-pointer">
                        Desserts
                    </li>
                </ul>
            </div>
            <div className="mx-8 flex gap-10 justify-center items-start mt-10">
                <button className="w-10 h-10 rounded-full border mt-40 border-gray-400 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition">
                    <FaArrowLeft size={12} />
                </button>
                {pasta.map(product => (
                    <div key={product.id} className="flex flex-col items-center">
                        <img
                            className="w-70 h-100 object-cover"
                            src={product.image}
                            alt="Product image"
                        />
                        <p className="mt-3 font-semibold">{product.name}</p>
                        <p className="text-gray-600">{product.price}$</p>
                    </div>
                ))}


                <button className="w-10 h-10 mt-40 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition">
                    <FaArrowRight size={12} />
                </button>
            </div>

        </section>
    );
};
export default Menu;