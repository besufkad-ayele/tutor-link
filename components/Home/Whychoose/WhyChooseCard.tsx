import React from 'react'
import Image from 'next/image'

type Props = {
  image: string;
  title: string;
  description: string;
};
const WhyChooseCard = ({image, title, description }:Props) => {
  return (
    <div className='flex flex-col items-center bg-gray p-4 rounded-lg shadow-2xl backdrop-blur-md bg-opacity-70 shadow-gray-500/50'>
        <Image
        src={image}
        alt={title}
        width={100}
        height={100}
        className="mx-auto object-contain"
        />
        <h1>{title}</h1>
        <p className='text-gray-600 text-center font-medium text-sm mb'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, illo. Quam, unde.
        </p>
    </div>
  )
}

export default WhyChooseCard


// import React from "react";
// import Image from "next/image";

// type Props = {
//   image: string;
//   title: string;
//   linkText: string;
// };
// const WhyChooseCard = ({ image, title, linkText }: Props) => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow-2xl backdrop-blur-md bg-opacity-70 shadow-gray-500/50">
//       <Image
//         src={image}
//         alt={title}
//         width={100}
//         height={100}
//         className="mx-auto object-contain"
//       />
//       <h1>{title}</h1>
//       <p className="text-gray-600 text-center font-medium text-sm mb-4">
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur,
//         illo. Quam, unde.
//       </p>
//       <p>{linkText}</p>
//     </div>
//   );
// };

// export default WhyChooseCard;