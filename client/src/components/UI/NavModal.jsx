/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";

const NavModal = ({setModal}) => {

  return (
    <div className="flex fixed top-0 left-0 h-[100vh] w-[100%] bg-[rgb(0,0,0,0.8)] z-[10]">
      <div className="w-[80%] md:w-[30%] flex-col ">
        <button className="bg-slate-900 w-[100%] text-white p-4 text-2xl flex justify-center items-center gap-[1rem]"> <FaRegUser className="text-[#ffa500]"/>
          Hello, Guest
        </button>
        <div className="bg-[white] h-screen overflow-auto pl-8 flex flex-col gap-[1em] pb-20">
          <p className="text-lg mt-4 font-bold">Digital Content and Devices</p>
          <p>Amazon Music</p>
          <p>Kindle E-readers & Books</p>
          <p>Amazon Appstore</p>
          <hr />
            <p className="text-lg font-bold">Shop By Department</p>
            <p>Electronics</p>
            <p>Computers</p>
            <p>Smart Home</p>
            <p>Arts & Crafts</p>
            <hr />
          
            
            <p className="text-lg font-bold">Programs & Features</p>
            <p>Gift Cards</p>
            <p>Shop By Interest</p>
            <p>Amazon Live</p>
            <p>International Shipping</p>
            <hr />
          

            <p className="text-lg font-bold">Help & Settings</p>
            <p>Electronics</p>
            <p>Computers</p>
            <p>Smart Home</p>
            <p>Arts & Crafts</p>
            <hr />
          
        </div>
      </div>

      <div className="p-5">
        <button onClick={()=> setModal(false)}>
          <img  className="w-[2em]" src="icons/clear.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default NavModal;
