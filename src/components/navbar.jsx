import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[160px] gap-[300px] flex flex-row items-center justify-center px-[100px]'>
      <img src='src\assests\Logo.png' className='w-[160px] h-[160px]' />
      <div className='roboto flex flex-row items-center justify-center gap-[50px] text-[20px]'>
        <button className='text-gray-700 font-regular cursor-pointer hover:text-black'>Collection</button>
        <button className='text-gray-700 font-regular cursor-pointer hover:text-black'>Our Story</button>
        <button className='text-gray-700 font-regular cursor-pointer hover:text-black'>Journal</button>
        <button className='text-gray-700 font-regular cursor-pointer hover:text-black'>Contact</button>
      </div>

      <div className=' flex flex-row gap-5'>
        <div className='bg-[#125836] border rounded-full w-[38px] h-[38px] flex items-center justify-center cursor-pointer'>
          <img src='src/assests/cart.svg' />
        </div>

        <div className='bg-[#125836] border rounded-full w-[38px] h-[38px] flex items-center justify-center cursor-pointer'>
          <img src='src/assests/user.svg' />
        </div>
      </div>
    </div>


  )
}

export default Navbar