// import React from 'react'

import { Link } from "react-router-dom"

const Cart = () => {
  return (
    <div className="bg-slate-400">
      <p className="text-2xl font-bold p-[1rem] text-[white] ">Your cart is empty.</p>
      <div className="p-2 w-[100%]">
        <p className="text-xl">
        Your Shopping Cart lives to serve. Give it purpose — fill it with groceries, clothing, household supplies, electronics, and more.
        Continue shopping on the <Link className="text-[#ffa500]" to='/'>
           Oward
        </Link> Homepage.
</p>
      </div>
    </div>
  )
}

export default Cart