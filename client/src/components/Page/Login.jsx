import LoginSignfooter from "./LoginSignfooter";

const Login = () => {
  return (
    <div className="flex justify-center items-center flex-col ">
      <span className="bg-slate-900 w-[100%] flex justify-center">
        <img className="w-20" src="icons/amazon.svg " alt="" />
      </span>
      <div className="flex justify-center items-center w-[100%] mt-4 ">
          <div className="flex flex-col border border-slate-700 mb-10 mt-8 p-4 gap-[1rem] w-[90%] items-left justify-left rounded md:w-[40%] md:mb-[1rem]">
            <p className="text-left text-2xl font-bold md:text-3xl">Sign in</p>
            
            <div>
                <p className="text-left font-bold">Email</p>
                <input placeholder="E-mail" type="text" className="w-[100%] border border-slate-700 rounded p-[0.3rem] placeholder:text-slate-400"/>
            </div>

            <div>
                <p className="text-left font-bold">Password</p>
                <input placeholder="Password" type="text" className="w-[100%] border border-slate-700 rounded p-[0.3rem] placeholder:text-slate-400"/>
            </div>

            <div className="flex justify-center md:items-center ">
                <button className="bg-[#ffa500] mt-5 text-xl text-white p-[0.5rem] rounded w-[10rem] md:w-[20rem] mb-5 ">Sign in</button>
            </div>

        </div>
    </div>
    <LoginSignfooter/>
    </div>
  );
};

export default Login;
