import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='h-[250px] bg-[#B7BCA9] flex flex-col justify-center'>
            <div className=" flex justify-between flex w-full  items-center  px-[100px]  text-black font-bold">
                <ul className='flex gap-6'>
                    <li>Menu</li>
                    <li>Team</li>
                    <li>Events</li>
                    <li>Contact</li>
                </ul>

                <h1 className='logo text-[32px] font-semibold'>Cibo gustoso</h1>

                <div className='flex flex-col gap-6'>
                    <p className="">Sign up to our newsteller</p>
                    <form>
                        <input className="border-b-2 border-black" type="email" placeholder='Email' />
                    </form>
                </div>
            </div>
            <div>
                <ul className='flex gap-5 ml-15 justify-center items-center'>
                    <li> <CiFacebook className='text-4xl' /></li>
                    <li><IoLogoInstagram className='text-4xl' /></li>
                    <li><FaTwitter className='text-4xl' /></li>
                    <li><FaYoutube className='text-4xl' /></li>
                </ul>
            </div>
        </div>

    )
}

export default Footer