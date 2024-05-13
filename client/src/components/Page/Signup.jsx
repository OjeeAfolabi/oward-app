// import React from 'react'

import LoginSignfooter from "./LoginSignfooter"

const Signup = () => {
  return (
    <div className="flex justify-center items-center flex-col ">
        <span className="bg-slate-900 w-[100%] flex justify-center">
            <img className="w-20" src="icons/amazon.svg " alt="" /></span>
        <div className="flex justify-center items-center w-[100%] mt-4 ">
          <div className="flex flex-col border border-slate-700 mb-10 mt-8 p-4 gap-[1rem] w-[90%] items-left justify-left rounded md:w-[40%] md:mb-[1rem] md:gap-[0.3rem] md:pb-1">
            <p className="text-left text-xl font-bold">Create Account</p>
            
            <div>
                <p className="text-left font-bold">Your name</p>
                <input placeholder="First and last name" type="text" className="w-[100%] border border-slate-700 rounded p-[0.3rem] placeholder:text-slate-400"/>
            </div>

            <div>
                <p className="text-left font-bold">Mobile number or E-mail</p>
                <input placeholder="Email" type="text" className="w-[100%]  border border-slate-700 rounded p-[0.3rem] placeholder:text-slate-400"/>
            </div>

            <div>
                <p className="text-left font-bold">Password</p>
                <input placeholder="Password" type="text" className="w-[100%]  border border-slate-700 rounded p-[0.3rem] placeholder:text-slate-400"/>
                <span className="flex gap-1 ml-0 ">
                <img className="w-3" src="icons/info.svg" alt="" />
                <p className="text-left text-xs">At least 6 characters</p>
                </span>
            </div>

            <div>
                <p className="text-left font-bold">Re-enter Password</p>
                <input placeholder="Password" type="text" className=" w-[100%] border border-slate-700 rounded p-[0.3rem] placeholder:text-slate-400"/>
            </div>

            <div className="flex justify-center md:items-center md:mt-4 ">
                <button className="bg-[#ffa500] text-white p-[0.5rem] rounded w-[10rem] md:w-[20rem] mb-5 ">Continue</button>
            </div> 

            </div> 
            
        </div>
        <hr />
        <div className="md:flex justify-center items-center pb-[6em]"> Already have an account?    <button className="text-[#ffa500] p-2">Sign in</button></div>
        <LoginSignfooter/>
    </div>
  )
}

export default Signup