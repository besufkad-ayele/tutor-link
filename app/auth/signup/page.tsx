import React from 'react'
import LoginPage from './login'

const page = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-red'>
      <h1 className='text-red-500'>register page</h1>
      <LoginPage/>
    </div>
  )
}

export default page