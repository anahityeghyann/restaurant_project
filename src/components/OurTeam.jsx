import React from 'react'
import staff1 from "../assets/staff1.png"
import staff2 from "../assets/staff2.png"
import staff3 from "../assets/staff3.png"
import staff4 from "../assets/staff4.png"

const OurTeam = () => {
    return (
        <section className='bg-[#B7BCA9] text-[#36392D] items-center w-full h-[90vh] flex flex-col gap-10'>
            <div className='mt-10 flex items-center justify-between px-20 w-full'>
                <h1 className='text-5xl font-bold'>Staff</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate <br /> corrupti quaerat necessitatibus perferendis dolores enim eveniet</p>
            </div>
            <div className='flex gap-9 p-5'>
                <div className='text-center'>
                    <img src={staff1} className="w-70 h-100" alt="" />
                    <h3 className='text-xl font-bold text-center'>Hakan Yildiz</h3>
                    <p>Head Chef</p>
                </div>
                <div className='text-center'>
                    <img src={staff2} alt="" className="w-70 h-100" />
                    <h3 className='text-xl font-bold text-center'>Martin Davids</h3>
                    <p>Vice Head Chef</p>
                </div>
                <div className='text-center'>
                    <img src={staff3} alt="" className="w-70 h-100"/>
                    <h3 className='text-xl font-bold text-center'>John Davids</h3>
                    <p>Chef</p>
                </div>
                <div className='text-center'>
                    <img src={staff4} alt="" className="w-70 h-100"/>
                    <h3 className='text-xl font-bold text-center'>Jarvis Solomons</h3> 
                    <p>Founder</p>     
                </div>
            </div>
        </section>
    )
}

export default OurTeam
