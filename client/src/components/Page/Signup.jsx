// import React from 'react'

const Signup = () => {
  return (
    <div className="flex justify-center items-center flex-col border border-red-600">
        <span><img className="w-20" src="icons/amazon.svg" alt="" /></span>
        <div className="border w-[70%] rounded border-slate-700">
          <div className="flex flex-col p-[1rem] gap-[1rem]">
            <p className="text-left text-xl font-bold">Create Account</p>
            
            <div>
                <p>Your name</p>
                <input placeholder="First and last name" type="text" className="border border-slate-700 rounded p-[0.5rem] placeholder:text-slate-400"/>
            </div>

            <div>
                <p>Mobile number or E-mail</p>
                <input placeholder="Email" type="text" className="border border-slate-700 rounded p-[0.5rem] placeholder:text-slate-400"/>
            </div>

            
            
            </div>  
        </div>
    </div>
  )
}

export default Signup