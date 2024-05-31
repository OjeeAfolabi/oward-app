// import React from 'react'
import { Outlet } from "react-router-dom"
import Header from "../../Header"
import Footer from "../../Footer"
import { Toaster } from 'react-hot-toast';


const SharedComponent = () => {
  return (
    <div>
        <Header/>
        {/* <Toaster position="bottom-right" toastOptions={{duration:2000}}/> */}
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default SharedComponent