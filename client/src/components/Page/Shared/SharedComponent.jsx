/* eslint-disable react/prop-types */
// import React from 'react'
import { Outlet } from "react-router-dom"
import Header from "../../Header"
import Footer from "../../Footer"
import { useState } from "react"
// import { useEffect } from "react"


const SharedComponent = ({setLoggedin,name}) => {

  const [overflow,setOverflow] = useState('auto')

  return (
    <div>
        <Header setLoggedin ={setLoggedin} setOverflow={setOverflow} name={name} />
        <Outlet context={{value:overflow}}/>
        <Footer/>
    </div>
  )
}

export default SharedComponent