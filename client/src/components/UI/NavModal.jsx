/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";

import Categories from "./Categories";
import json from "../../utils/categories.json";

const NavModal = ({ setModal, name, setOverflow }) => {
  console.log("json", json);
  return (
    <div className="flex fixed top-0 left-0 h-[100vh] w-[100%] bg-[rgb(0,0,0,0.8)] z-[10] ">
      <div className="w-[80%] md:w-[30%] flex-col ">
        <p className="bg-slate-900 w-[100%] text-white p-4 text-2xl flex justify-center items-center gap-[1rem]">
          {" "}
          <FaRegUser className="text-[#ffa500]" />
          Hello, {name}
        </p>
        <div className="bg-[white] h-screen overflow-y-auto overflow-x-hidden px-8 flex flex-col gap-[1em] w-full pb-20">
          {json.map((item, index) => (
            <Categories
              key={index}
              setOverflow={setOverflow}
              setModal={setModal}
              data={item}
            />
          ))}
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
          <img className="w-[2em]" src="/icons/clear.svg" alt="" />
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
