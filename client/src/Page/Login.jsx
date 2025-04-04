import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LoginSignfooter from "./LoginSignfooter";
import { LiaHandPointLeftSolid } from "react-icons/lia";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    error: null,
  });

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    const { email, password } = data;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_OWARD_URL}/login`,
        body,
        config
      );

      if (res) {
        console.log(toast.success("Login successful"));
        // toast.success("resLogin", res.data);
        // console.log("login success");
        navigate("/");
      }
    } catch (error) {
      console.log(error.response.data);
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
      <form onSubmit={loginUser}>
        <div className="flex justify-center items-center flex-col ">
          <span className="bg-slate-900 w-[100%] flex justify-center">
            <img
              className="w-[7em] py-[1em]"
              src="/images/owardpng.PNG "
              alt=""
            />
          </span>
          <div className="flex justify-center items-center w-[100%] mt-4 ">
            <div className="bg-slate-300 flex flex-col border border-slate-700 mb-10 mt-8 p-4 gap-[1rem] w-[90%] items-left justify-left rounded md:w-[40%] md:mb-[1rem]">
              <p className="text-left text-2xl font-bold md:text-3xl">
                Sign in
              </p>

              <div>
                <p className="text-left font-bold">Email</p>
                <input
                  placeholder="E-mail"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  type="email"
                  className="w-[100%] border border-slate-700 rounded p-[0.3rem] placeholder:text-slate-400"
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
                  className="w-[100%] border border-slate-700 rounded p-[0.3rem] placeholder:text-slate-400"
                />
              </div>

              <div className="flex justify-center md:items-center ">
                <button
                  type="submit"
                  className="bg-[#ffa500] mt-5 text-xl text-white p-[0.5rem] rounded w-[10rem] md:w-[20rem] mb-5 "
                >
                  Sign in
                </button>
              </div>
              <div className="flex justify-center items-center gap-1">
                <p>Don&apos;t have an account? Sign up</p>
                <Link className="text-[#ffa500] font-semibold" to="/signup">
                  Here
                </Link>
                <LiaHandPointLeftSolid className="text-[#ffa500]" />
              </div>
            </div>
          </div>
          <LoginSignfooter />
        </div>
      </form>
    </div>
  );
};

export default Login;
