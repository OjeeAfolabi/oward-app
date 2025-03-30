// import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LoginSignfooter from "./LoginSignfooter";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: null,
  });

  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = data;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ name, email, password, confirmPassword });

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_OWARD_URL}/signup`,
        body,
        config
      );
      if (res) {
        toast.success("Registration successful");
        navigate("/");
      }
    } catch (error) {
      // console.log(error.response.data.data);
      setData((prev) => {
        return {
          ...prev,
          error: error.response.data.data,
        };
      });
    }
  };

  useEffect(() => {
    if (data.error) {
      toast.error(data.error);
      setData((prev) => {
        return {
          ...prev,
          error: null,
        };
      });
    }
  }, [data.error]);

  return (
    <div>
      <ToastContainer />
      <form>
        <div className="flex justify-center items-center flex-col ">
          <span className="bg-slate-900 w-[100%] flex justify-center">
            <Link to="/">
              <img
                className="w-[7em] py-[1em]"
                src="/images/owardpng.PNG "
                alt=""
              />
            </Link>
          </span>
          <div className="flex justify-center items-center w-[100%] mt-4 ">
            <div
              id="size"
              className="bg-slate-300 flex flex-col border border-slate-700  mb-10 mt-8 p-4 gap-[1rem] w-[90%] items-left justify-left rounded md:w-[40%] md:mb-[1rem] md:gap-[0.3rem] md:pb-1 "
            >
              <p className="text-left text-xl font-bold">Create Account</p>

              <div>
                <p className="text-left font-bold">Your name</p>
                <input
                  placeholder="First and last name"
                  type="text"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  className="w-[100%] border border-slate-700 rounded p-[0.3rem] placeholder:text-slate-400"
                />
              </div>

              <div>
                <p className="text-left font-bold">E-mail</p>
                <input
                  placeholder="@email.com"
                  type="text"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className="w-[100%]  border border-slate-700 rounded p-[0.3rem] placeholder:text-slate-400"
                />
              </div>

              <div>
                <p className="text-left font-bold">Password</p>
                <input
                  placeholder="Password"
                  type="password"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  className="w-[100%]  border border-slate-700 rounded p-[0.3rem] placeholder:text-slate-400"
                />
                <span className="flex gap-1 ml-0 ">
                  <img className="w-3" src="icons/info.svg" alt="" />
                  <p className="text-left text-xs">At least 6 characters</p>
                </span>
              </div>

              <div>
                <p className="text-left font-bold">Re-enter Password</p>
                <input
                  placeholder="Confirm password"
                  type="password"
                  value={data.confirmPassword}
                  onChange={(e) =>
                    setData({ ...data, confirmPassword: e.target.value })
                  }
                  className=" w-[100%] border border-slate-700 rounded p-[0.3rem] placeholder:text-slate-400"
                />
              </div>

              <div className="flex justify-center md:items-center md:mt-4 ">
                <button
                  onClick={registerUser}
                  className="bg-[#ffa500] text-white p-[0.5rem] rounded w-[10rem] md:w-[20rem] mb-5  "
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div className="md:flex justify-center items-center flex pb-[6em] gap-2">
            <p>Already have an account?</p>
            <Link className="font-semibold text-[#ffa500]" to="/login">
              Sign in
            </Link>
          </div>
          <LoginSignfooter />
        </div>
      </form>
    </div>
  );
};

export default Signup;
