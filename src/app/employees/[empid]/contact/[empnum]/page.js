"use client"
import React from 'react'
import { useParams } from 'next/navigation'
const Empcontact = () => { // also get params value directly in empContact by passing params prop this without importing useParams (note:it gives some errors)
    const {empid,empnum} = useParams()
  return (
    <div> employeee id :{empid} and contact id: {empnum} </div>
  )
}

export default Empcontact