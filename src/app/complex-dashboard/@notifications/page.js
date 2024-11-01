import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      notifications dashboard page
      <Link className='bg-blue-400 p-2' href="/complex-dashboard/archived">archived</Link>
    </div>
  )
}

export default page