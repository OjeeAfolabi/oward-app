/* eslint-disable react/prop-types */
// import React from 'react'
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
// import { useEffect } from "react"

const SharedComponent = ({ setLoggedin, name, cart, id }) => {
  const [overflow, setOverflow] = useState("auto");
  const [search, setSearch] = useState("");
  const [searchClick, setSearchClick] = useState(false)
  const [cache, setCache ]= useState()
  // const [cart, setCart ] = useState(user.cart)
  // const [id] = useState(user._id)
  // console.log("user", user)
  return (
    <div>
      <Header
        setLoggedin={setLoggedin}
        search={search}
        setSearch={setSearch}
        setOverflow={setOverflow}
        searchClick={searchClick}
        setCache={setCache}
        setSearchClick={setSearchClick}
        name={name}
        cart={cart}
      />
      <Outlet context={{ value: overflow, searchValue: search,clickValue:searchClick,cacheValue:cache,userID:id,userCart:cart }} />
      <Footer />
    </div>
  );
};

export default SharedComponent;
