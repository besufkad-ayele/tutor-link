import React from 'react'

const whychoose = () => {
  return (
    <div
      className="h-screen w-full sm:w-[95%] mx-auto flex items-center justify-center 
           bg-gradient-to-r from-blue-500 to-purple-600 
           bg-cover bg-center"
      style={{ backgroundImage: "url('/images/cat-dog-bg.jpg')" }} // Updated path
    >
      <h1 className="text-black text-7xl font-bold text-center">
        Welcome to the Hero Section
      </h1>
    </div>
  );
}

export default whychoose