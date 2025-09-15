// import React from 'react'

import { useEffect } from "react";
import CategoryCard from "../components/CategoryCard";
import { useOutletContext } from "react-router-dom";
import json from '../utils/categories.json';

const Home = () => {
  const context = useOutletContext();
  const overflow = context.value;

  useEffect(() => {
    document.body.style.overflowY = overflow;
  }, [overflow]);

  return (
    <div className="w-[100%] flex flex-col justify-center overflow-x-hidden">
      <div className="relative w-full md:h-[100vh] mt-[6.5em] bg-[url('/images/amazonbg.jpg')] bg-cover md:mt-[3em] ">
        
        <div className="pt-6 md:absolute top-0 md:top-[auto] md:bottom-0 left-0 w-[100%] justify-center items-center md:flex-row flex md:gap-[2rem] flex-col gap-3">
          {json.map((items, index)=> {
            if (index < 3){
              return <CategoryCard key={index} data={items}/>
            }
          })}
          
        </div>

      </div>

      <div className="relative bg-[#fbdeda] w-[100%]">
        
        <div className="pb-6 justify-center items-center md:gap-[2rem] md:pt-[2rem] flex flex-col pt-[1rem] gap-[1rem] md:flex-row ">
        {json.map((items, index)=> {
            if (index >= 3){
              return <CategoryCard key={index} data={items}/>
            }
          })}
        </div>

      </div>
    </div>
  );
};

export default Home;
