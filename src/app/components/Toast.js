import React from 'react'
import { ToastContainer } from 'react-toastify'
const Toast = () => {
  return (
    <ToastContainer
    position="top-center" // ✅ Centered on top
    autoClose={2270}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    />
  )
}

export default Toast