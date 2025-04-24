"use client"
import React, { useRef } from 'react'
const page = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const genderRef = useRef()
    const departmentRef = useRef()
    const positionRef = useRef()
    const cleanInputFileds =()=>{
        nameRef.current.value = ""
        emailRef.current.value = ""
        genderRef.current.value = ""
        departmentRef.current.value = ""
        positionRef.current.value = ""
    }
    const handleAdd =()=>{
        const empData = {
            name:nameRef.current.value,
            email:emailRef.current.value,
            gender:genderRef.current.valuef,
            department:departmentRef.current.value,
            position:positionRef.current.value
           }
       console.log(empData)
       cleanInputFileds()
    }
  return (
    <div className='flex flex-col w-[400px] gap-6 m-auto mt-20'>
        <h1 className='text-2xl font-semibold text-center'>Fill employee data</h1>
        <input  ref={nameRef} type="text" placeholder='enter your name' className='border-2 p-2 ' />
        <input ref={emailRef} type="email" placeholder='enter your email'  className='border-2  p-2'/>
        <input ref={genderRef} type="text" placeholder='enter your gender' className='border-2 p-2'/>
        <input ref={departmentRef} type="text" placeholder='enter your department' className='border-2 p-2'/>
        <input ref={positionRef} type="text" placeholder='enter your position' className='border-2 p-2'/>
        <button onClick={handleAdd} className='bg-green-400 w-[80px] m-auto p-1 rounded-md hover:bg-green-300'>add</button>
    </div>
  )
}

export default page