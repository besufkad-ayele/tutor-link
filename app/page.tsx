import Image from "next/image";
import HomeComponent from "../components/Home/Home";

export default function Home() {
  return (      
    <div className='flex justify-center items-center h-screen bg-gray-500'>
        <HomeComponent />
    </div>
  );
}
