/* eslint-disable react/prop-types */
// import React from 'react'
import { useState } from "react";
import NavModal from "./UI/NavModal";
import SignOutModal from "./UI/SignOutModal";
import ReactDOM from "react-dom";
import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Header = ({
  setLoggedin,
  name,
  search,
  setSearch,
  setCache,
  setSearchClick,
  setOverflow,
  cart
}) => {
  const [modal, setModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  const navigate = useNavigate();

  const onChangHandler = (e) => {
    setSearch(e.target.value);
  };

  const clickHandler = () => {
    setModal(true);
    setOverflow("hidden");
  };

  const searchClickHandler = () => {
    setCache(search);
    setSearchClick((prev) => !prev);
    navigate("/search");
    setSearch("");
  };

  const signoutHandler = () => {
    setLogoutModal(true);
    setOverflow("hidden");
  };

  const logout = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        `${import.meta.env.VITE_OWARD_URL}/logout`,
        config,
        {
        withCredentials: true,
      }
      );
      if (res) {
        setLoggedin(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed z-[2] top-0 left-0 bg-slate-500 justify-center items-center flex-col w-[100%] p-1 overflow-hidden">
      <div className="w-[100%] flex justify-between items-center">
        <div className="flex">
          <button>
            <img
              onClick={clickHandler}
              className="w-[40px] ml-2"
              src="/icons/hamburger.svg"
              alt=""
            />
          </button>
          <Link to="/">
            <img
              className="md:px-[1em] ml-[0.5em] md:w-[7em] w-[5em] mt-[0.3em] h-[2em] "
              src="/images/owardpng.PNG"
              alt=""
            />
          </Link>
        </div>

        <div className="md:flex hidden  bg-white rounded">
          <input
            className="focus:outline-none text-center rounded  w-[30rem]"
            type="text"
            value={search}
            onChange={onChangHandler}
          />
          <button onClick={searchClickHandler}>
            <img
              className="w-[2em] bg-[#ffa500] rounded p-1"
              src="/icons/search.svg"
              alt=""
            />
          </button>
        </div>

        <div className="flex items-center gap-[1rem] md:gap-[1em] ">
          <div className="flex flex-col">
            <span className="md:ml-3 hidden md:flex w-[auto] text-[#ffa500]">
              Hello, {name}
            </span>
            <span className="md:hidden text-white">
              <strong>{name}</strong>
            </span>
            <span className="md:ml-3 mt-0 mb-0 hidden md:flex">
              <button onClick={signoutHandler}>
                <strong className="text-[white]">Sign out</strong>
              </button>
            </span>
          </div>
          <span className="flex md:hidden m-0 p-0">
            <FaRegUser
              // onClick={logout}
              onClick={() => {
                setLogoutModal(true);
                setOverflow("hidden");
              }}
              className="m-0 p-0 text-xl text-white  "
            />
          </span>

          <div className="relative">
            <div className="bg-[#ffa500] text-white text-[0.8em] rounded-[50%] absolute right-0 top-0 w-[1em] h-[1em] flex items-center justify-center p-2">
             {cart.length}
            </div>
            <Link to="/cart">
              <img className="w-[2em] mr-2" src="icons/cart.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>

      {/* SEARCH INPUT FOR MOBILE VIEW */}
      <div className="w-[100%] mt-2 flex justify-center items-center md:hidden py-1 px-2 ">
        <div className="flex bg-white rounded w-[inherit]">
          <input
            className="focus:outline-none text-center rounded w-[90%] p-2"
            type="text"
          />
          <span className="w-[10%] px-2 py-2 bg-[orange] rounded ">
            <img className="w-[2em]" src="icons/search.svg" alt="" />
          </span>
        </div>
      </div>

      {modal &&
        ReactDOM.createPortal(
          <NavModal
            name={name}
            setModal={setModal}
            setOverflow={setOverflow}
          />,
          document.getElementById("portal")
        )}

      {logoutModal &&
        ReactDOM.createPortal(
          <SignOutModal
            setLogoutModal={setLogoutModal}
            setOverflow={setOverflow}
            logout={logout}
          />,
          document.getElementById("portal")
        )}
    </div>
  );
};

export default Header;
