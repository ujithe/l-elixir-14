import React from 'react'
import Logo from '../assests/Logo.png'

const Loading = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center overflow-hidden'>
      <img src={Logo} alt='Loading' />
    </div>
  )
}

export default Loading