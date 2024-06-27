import React from 'react'

const Footer = () => {
  const today = new Date();
  return (
    <div className='w-[100%] font-bold text-center text-xl absolute bottom-0 bg-slate-300'>
      copyright &copy; {today.getFullYear()}
    </div>
  )
}

export default Footer
