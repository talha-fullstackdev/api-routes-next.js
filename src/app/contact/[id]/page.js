"use client"
import { useParams } from 'next/navigation'
import React from 'react'
const page = () => {
    const params = useParams()
  return (
    <div>now you are contacting to {params.id} </div>
  )
}

export default page