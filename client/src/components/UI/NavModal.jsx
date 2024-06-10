/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";

const NavModal = ({ setModal, name, setOverflow }) => {
  return (
    <div className="flex fixed top-0 left-0 h-[100vh] w-[100%] bg-[rgb(0,0,0,0.8)] z-[10] ">
      <div className="w-[80%] md:w-[30%] flex-col ">
        <p className="bg-slate-900 w-[100%] text-white p-4 text-2xl flex justify-center items-center gap-[1rem]">
          {" "}
          <FaRegUser className="text-[#ffa500]" />
          Hello, {name}
        </p>
        <div className="bg-[white] h-screen overflow-auto pl-8 flex flex-col gap-[1em] pb-20">
          
          <p className="text-lg mt-4 font-bold">Digital Devices</p>
          <p>Appliances</p>
          <p>Cell Phones & Accessories </p>
          <p>Video Games</p>
          <hr />

          <p className="text-lg mt-4 font-bold">Computers</p>
          <p>Computers & Tablets</p>
          <p>Cell Phones & Accessories </p>
          <p>Video Games</p>
          <hr />

          <p className="text-lg font-bold">Fashion</p>
          <p>Men&apos;s Fashion</p>
          <p>Women&apos;s Fashion</p>
          <p>Baby clothing and Shoes</p>
          <hr />

          <p className="text-lg font-bold">Arts and Crafts</p>
          <p>Beading & Jewelry Making</p>
          <p>Knitting & Crocheting</p>
          <p>Painting & Arts Supplies</p>
          <hr />
        </div>
      </div>

      <div className="relative p-5 w-[20%] md:w-[70%]">

        <button
          className="relative z-[2]"
          onClick={() => {
            setModal(false);
            setOverflow("auto");
          }}
        >
          <img className="w-[2em]" src="icons/clear.svg" alt="" />
        </button>

        <div
          onClick={() => {
            setModal(false);
            setOverflow("auto");
          }}
          className="absolute left-0 top-0 w-full h-full pointer-events-auto"
        ></div>

      </div>
    </div>
  );
};

export default NavModal;
