// import React from 'react'
import { useState } from "react";
import NavModal from "./UI/NavModal";
import ReactDOM from 'react-dom'
import { FaRegUser } from "react-icons/fa";

const Header = () => {

  const [modal, setModal] = useState(false);

  const clickHandler = () => {
    setModal(true)
  };

  return (
    <div className="bg-slate-500 justify-center flex-col w-[100%] pb-1 pt-1">
      <div className="w-[100%] flex justify-between items-center ">
        <div className="flex">
          <img
            onClick={clickHandler}
            className="w-[40px] ml-2"
            src="icons/hamburger.svg"
            alt=""
          />
          <img
            className="w-[80px] m-0 h-[40px]"
            src="icons/amazon.svg"
            alt=""
          />
        </div>

        <div className="md:flex hidden bg-white rounded">
          <input className="focus:outline-none text-center rounded w-[30rem]" type="text" />
          <span><img
            className="w-[2em] bg-[orange] rounded p-1"
            src="icons/search.svg"
            alt=""
          /></span> 
        </div>

        <div className="flex items-center gap-[1rem] md:gap-[1em] ">
          <div className="flex flex-col">
            <span className='md:ml-3 hidden md:flex w-[6em] text-[orange]'>Hello, Guest</span>
            <span className="md:hidden text-white"><strong>Guest</strong></span>
            <span className="md:ml-3 mt-0 mb-0 hidden md:flex">
              <button className="text-white "><strong>Sign in</strong></button>
            </span>
          </div>
          <span className="flex md:hidden m-0 p-0"><FaRegUser className="m-0 p-0 text-xl text-white  "/></span>

          <div>
            <img className="w-[2em] mr-2" src="icons/cart.svg" alt="" />
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
      ReactDOM.createPortal(<NavModal setModal={setModal}/>, document.getElementById("portal"))
       
      }
      
    </div>
  );
};

export default Header;
