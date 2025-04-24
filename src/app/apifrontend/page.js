import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col w-[400px] gap-6 m-auto mt-20'>
        <h1 className='text-2xl font-semibold text-center'>Fill employee data</h1>
        <input type="text" placeholder='enter your name' className='border-2 p-2 '/>
        <input type="email" placeholder='enter your email'  className='border-2  p-2'/>
        <input type="text" placeholder='enter your gender' className='border-2 p-2'/>
        <input type="text" placeholder='enter your department' className='border-2 p-2'/>
        <input type="text" placeholder='enter your position' className='border-2 p-2'/>
        <button className='bg-green-400 w-[80px] m-auto p-1 rounded-md hover:bg-green-300'>add</button>
    </div>
  )
}

export default page