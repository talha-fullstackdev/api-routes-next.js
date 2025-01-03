"use client"
import React from 'react'
import { useParams } from 'next/navigation'
const EmpID = () => {
    const {empid} = useParams()
  return (
    <div>The Employee id is {empid} </div>
  )
}

export default EmpID

