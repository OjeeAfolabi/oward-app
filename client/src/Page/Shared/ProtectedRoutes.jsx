/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ProtectedRoutes = ({setLoggedin,loggedin, setName, setCart,setId}) => {
  const [auth, setAuth] = useState();
  const [ready, setReady] = useState(false);

  const getUser = async () => {
    //get user
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        "http://localhost:3000/api/v1/oward/user",
        config
      );
      // console.log(res.data.data);
      let name = res.data.data.name
      setName(name.split(" ")[0])
      setCart(res.data.data.cart)
      setId(res.data.data._id)
      // setUser(res.data.data)
     

      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // check if user is logged in or not
    const fetch = async () => {
      try {
        const user = await getUser();
      
        if (user) {
          setAuth(true);
          setReady(true);
          setLoggedin(true);
        } else {
          setAuth(false);
          setReady(true);
          throw new Error("no user found");
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  }, [loggedin]);
  return <> {ready && <> {auth ? <Outlet /> : <Navigate to="/login" />}</>}</>;
};

export default ProtectedRoutes;
