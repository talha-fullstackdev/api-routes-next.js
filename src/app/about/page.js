import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <>
    <div> about page</div>
  <Link href="/" className='bg-blue-300 p-1 rounded-md '>back home</Link>
    </>
  )
}
export const metadata ={
  title:"about page"
}
export default page