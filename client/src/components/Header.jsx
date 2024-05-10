// import React from 'react'
import { useState } from "react";
import NavModal from "./UI/NavModal";

const Header = () => {
  const [src, setSrc] = useState("icons/hamburger.svg");
  const [modal, setModal] = useState(false);

  const clickHandler = () => {
    if (src === "icons/hamburger.svg") {
      setSrc("icons/clear.svg");
      setModal(true)
    } else {
      setSrc("icons/hamburger.svg");
      setModal(false)
    }
  };

  return (
    <div className="bg-slate-500 justify-center flex-col w-[100%] pb-1 pt-1">
      <div className="w-[100%] border flex justify-between items-center ">
        <div className="flex">
          <img
            onClick={clickHandler}
            className="w-[40px] "
            src={src}
            alt=""
          />
          <img
            className="w-[80px] m-0 h-[40px]"
            src="icons/amazon.svg"
            alt=""
          />
        </div>

        <div className="md:flex hidden">
          <input className="focus:outline-none text-center rounded w-[30rem]" type="text" />
          <img
            className="w-[2em] bg-slate-700 rounded"
            src="icons/search.svg"
            alt=""
          />
        </div>

        <div className="flex items-center gap-[2rem] border ">
          <div className="flex flex-col">
            <span className="md:ml-3 hidden md:flex">Hello, Guest</span>
            <span className="md:hidden">Guest</span>
            <span className="md:ml-3 mt-0 mb-0">
              <strong>Sign In</strong>
            </span>
          </div>

          <div>
            <img className="w-[2em] mr-4" src="icons/cart.svg" alt="" />
          </div>
        </div>
      </div>


      {/* SEARCH INPUT FOR MOBILE VIEW */}
      <div className="w-[100%] mt-2 flex justify-center items-center md:hidden py-1 px-2 ">
        <div className="flex bg-white rounded w-[inherit]">
        <input className="focus:outline-none text-center rounded w-[90%] p-2" type="text" />
        <span className="w-[10%] px-2 py-2 bg-[orange] rounded "><img className="w-[2em]" src="icons/search.svg" alt="" /></span>
        </div>
      </div>

      {
      modal && 
       <NavModal/>
      }
      
    </div>
  );
};

export default Header;
