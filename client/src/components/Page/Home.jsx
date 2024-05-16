// import React from 'react'

import CategoryCard from "../CategoryCard";

const Home = () => {
  return (
    <div className="w-[100%]">

      <div className="relative w-[inherit] h-[80vh] md:h-[100vh] mt-[6.5em] bg-[url('images/amazonbg.jpg')] bg-cover md:mt-[3em] ">
        {/* <img className="absolute " src="images/amazonbg.jpg" alt="" /> */}
        <div className="absolute bottom-0 left-0 w-[inherit] justify-center items-center md:flex-row flex md:gap-[2rem] flex-col gap-3 border-[4px]">
         <div className="flex justify-center">
           <CategoryCard />
         </div>
          <div className="flex justify-center">
            <CategoryCard />
          </div >
          <div className="hidden md:flex">
            <CategoryCard />
          </div>
        </div>
        
      </div>

      <div className="bg-[pink]">
          <div className=" justify-center items-center md:gap-[2rem] md:pt-[2rem] flex flex-col pt-[1rem] gap-[1rem] md:flex-row ">
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </div>
        </div>
    </div>
  );
};

export default Home;
