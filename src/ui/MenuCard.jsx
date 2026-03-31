import React from 'react'
// import image from "../assets/menu4.png"
import { FiShoppingCart } from "react-icons/fi";

const MenuCard = () => {
  return (
    <div className='w-[90%] h-[500px] shadow-2xl rounded-xl flex p-10'>
        <div>
            {/* <img src={image} alt="" className='h-[400px]' />            */}
        </div>
        <div className='p-10 flex flex-col justify-between text-[#36392D]'>
            <h1 className='text-xl'>Lasagna</h1>
            <div className='flex gap-5'>
                <h2 className='text-4xl font-bold text-[#36392D]'>8 <span className='text-[#7a825f]'>USD</span></h2>
                <div className='flex w-[150px] justify-between items-center bg-[#d7e2b0] px-5 rounded-lg font-semibold text-[#36392D]'>
                    <button className='cursor-pointer'>-</button>
                    0
                    <button>+</button>
                </div>
                <button className='flex w-[150px] justify-center gap-5 rounded-lg items-center bg-[#36392D] text-[#d7e2b0]'> <FiShoppingCart /> To cart</button>
            </div>
            <hr/>
            <div className='flex flex-col gap-2'>
                <h2 className='text-lg'>Ingredients</h2>
                <p>pasta sheets, ground meat, tomato sauce, onion, garlic, ricotta, mozzarella, Parmesan, salt, pepper, and herbs.</p>
            </div>
            <hr />
            <div>
                <h2 className='text-lg'>Category: Pasta</h2>
            </div>
        </div>
    </div>
  )
}

export default MenuCard