import React from 'react'
const layout = ({children,users,revenue,notifications}) => {
  return (
    <div>
        {children}
        <h1 className='font-bold text-xl'>complex dashboard layout page</h1>
        <h1 className='m-auto max-w-[400px] p-20 text-white text-xl bg-slate-500 border rounded-md mt-2 text-center'>{users}</h1>
        <h1 className='m-auto max-w-[400px] p-20 text-white text-xl bg-slate-500 border rounded-md mt-2 text-center'>{revenue}</h1>
        <h1 className='m-auto max-w-[400px] p-20 text-white text-xl bg-slate-500 border rounded-md mt-2 text-center mb-2'>{notifications}</h1>
    </div>
  )
}
export default layout