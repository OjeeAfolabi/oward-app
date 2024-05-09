// import React from 'react'

const Header = () => {
  return (
    <div className="bg-slate-500 flex justify-between items-center p-[10px]">
      <div>
        <img src="" alt="" />
        <img className="w-[80px] m-0 h-[40px]" src="icons/amazon.svg" alt="" />
      </div>
      <div className="md:flex hidden">
        <input
          className=" object-contain text-center rounded xl:w-[50rem]  w-[30rem]"
          type="text"
        />
        <img
          className="h-[40px] bg-slate-700 rounded"
          src="icons/search.svg"
          alt=""
        />
      </div>
      <div className="flex items-center gap-[4rem] ">
        <div className="flex flex-col">
          <span>Hello, Guest</span>
          <span className="mt-0 mb-0">
            <strong>Sign In</strong>
          </span>
        </div>

        <div>
          <img className="h-[40px] mr-4" src="icons/cart.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
