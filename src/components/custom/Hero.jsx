import React, { useState, useEffect } from "react";
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

function Hero() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const date = new Date();
      const options = { day: "numeric", month: "long" };
      setCurrentDate(date.toLocaleDateString(undefined, options));
    };

    updateDate(); 
    const interval = setInterval(updateDate, 24 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className='flex flex-col relative h-screen items-center gap-9 bg-cover justify-center bg-center bg-no-repeat px-4 md:px-12 text-center' 
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="absolute bottom-4 right-4 md:bottom-[4rem] md:right-[8rem] text-[24px] md:text-[40px] font-extrabold text-white">
        {currentDate}
      </div>
      
      <h1 className='font-extrabold text-[32px] md:text-[50px] leading-tight text-center mt-10 text-[#000080] '>
        <span className='text-[#000080]'>Unleash Your Wanderlust with AI :)</span>
        <br className="block md:hidden" /><br/> <span className="shadow-inherit">Custom Travel Plans, Perfectly Tailored</span>
      </h1>

      <p className='text-lg md:text-xl text-white max-w-[90%] md:max-w-[600px]'>
        Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
      </p>

      <Link to={'/create-trip'}>
        <Button className="px-6 py-3 text-sm md:text-base">Get Started</Button>
      </Link>
    </div>
  );
}

export default Hero;
