import React from 'react'
import Whychoose from "../../components/Home/Whychoose/whychoose";
import Hero from "../../components/Home/Hero/hero";
import HowWorks from "../../components/Home/HowWorks/HowWorks";
import FeatureWrapper from "../../components/Home/Feature/FeatureWrapper";
import Review from "../../components/Home/Review/Review";
import Contact from "../../components/Home/Contact/Contact";
const home = () => {
   return (

     <div className="">
       <div className="pt-24 h-screen bg-red-900">

         <Whychoose />

         <Hero />
         <HowWorks />

         <FeatureWrapper />

         <Review />

         <Contact />
       </div>
     </div>
   );
}

export default home