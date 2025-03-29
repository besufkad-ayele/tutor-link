import React from 'react'

const HowWorks = () => {
  return (
    <div className="pt16 pb-24  bg-gray-900 h-[1/2] flex flex-col">
      <div className="flex flex-col items-center justify-center text-center ">
        <h1 className="pt-16 text-4xl capitalize text-blue-950 font-bold" style={{ fontFamily: 'Arial, sans-serif', color: '#1E3A8A' }}>
          How it <span className="font-bold italic"  style={{ fontFamily: 'Georgia, serif' }}>works</span>
        </h1>
        <p className="text-lg text-amber-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {/* Add your content here */}
        <div className="bg-gray-600 p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold">Step 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-gray-500 p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold">Step 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-gray-500 p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold">Step 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      </div> 
  );
}

export default HowWorks