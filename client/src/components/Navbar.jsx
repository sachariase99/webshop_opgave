import React from 'react'

const Navbar = () => {
    return (
        <div className='text-white bg-[#1a1a1a] px-2 py-2 flex justify-between mb-4'>
                <h1 className='font-bold'>MyChoiceShop</h1>
                <div className='flex flex-col justify-center cursor-pointer'>
                    <span className='block bg-white h-[2px] w-6'></span>
                    <span className='block bg-white h-[2px] w-6 my-1'></span>
                    <span className='block bg-white h-[2px] w-6'></span>
                </div>
        </div>
    )
}

export default Navbar
