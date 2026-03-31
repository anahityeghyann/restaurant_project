import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    return (
        <header className="flex text-white w-full justify-between h-10 px-6 items-center py-8">
            <ul className='flex gap-7'>
                <li>Menu</li>
                <li>Team</li>
            </ul>
            <div className='flex gap-7'>
                <h1 className='logo text-[32px] font-semibold'>Cibo gustoso</h1>
            </div>

            <ul className='flex gap-7'>

                <li>Events</li>
                <li>Contact</li>
            </ul>
        </header>
    )
}

export default Header