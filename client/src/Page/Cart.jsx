/* eslint-disable react/prop-types */
// import React from 'react'
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className="bg-white pt-[6em] h-[80vh] px-[4em] flex items-center flex-col">
      <p className="text-2xl font-bold p-[1rem] text-[black] ">
        Your cart is empty.
      </p>

      <div className="p-2 w-[100%]">
        <p className="text-xl">
          Your Shopping Cart lives to serve. Give it purpose — fill it with
          groceries, clothing, household supplies, electronics, and more.
          Continue shopping on the{" "}
          <Link className="text-[#ffa500]" to="/">
            Oward
          </Link>{" "}
          Homepage.
        </p>
      </div>
    </div>
  );
};

const CartItem = ({ item, deleteHandler }) => {
  return (
    <>
      <div className="flex mt-[1em]  p-[2em] gap-[1em]">
        <div className="">
          <img
            className="md:w-[18em] w-[15em]"
            src={item["product_photo"]}
            alt=""
          />
        </div>
        <div className="">
          <p className="md:font-bold font-medium">{item["product_title"]}</p>
          <p className="md:w-[15em] w-[3em]">{item["product_description"]}</p>
          <div className="flex mt-[1em]">
            <button
              onClick={() => deleteHandler(item["asin"])}
              className="flex items-center justify-center hover:underline hover:text-blue-500"
            >
              Delete <img className="w-[1em]" src="/icons/delete.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="flex justify-end  md:w-[100%]">
          <p className="font-bold md:text-[1.5em] text-[1rem] ">{`$${item["product_price"]}`}</p>
        </div>
      </div>
      <hr className="border-0 h-[1px] w-[100%] bg-slate-400 mt-[1em]" />
    </>
  );
};

const Cart = ({ cart, setCart, userID }) => {
  const [totalPrice, setTotalPrice] = useState();

  const updateCart = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ id: userID, cartValue: cart });

    try {
      await axios.patch(`${import.meta.env.VITE_OWARD_URL}/cart`, body, config);
    } catch (error) {
      console.log(error.response);
    }
  };

  const deleteHandler = useCallback((asin) => {
    setCart((prev) => {
      let newCart = [];
      prev.forEach((item) => {
        if (item["asin"] != asin) {
          newCart = [...newCart, item];
        }
      });
      return newCart;
    });
  }, []);

  useEffect(() => {
    if (cart) {
      updateCart();
    }
  }, [cart]);

  useEffect(() => {
    let priceArray = cart.map((item) => item["product_price"]);
    const totalSum = priceArray.reduce(
      (acc, value) => acc + parseFloat(value.replace(/,/g, "")),
      0
    );
    setTotalPrice(totalSum.toFixed(2));
  }, []);
  if (cart.length < 1) {
    return <CartEmpty />;
  } else {
    return (
      <div className="bg-slate-300 md:mt-[3em] mt-[5em] p-[2em] md:p-[4em] md:flex md:gap-[1em] md:w-[100%] w-[100%]  ">
        <div className=" bg-white md:h-[100%] md:w-[75%]   md:p-[2em] h-[100%] p-[1em] rounded">
          <p className="font-bold text-[1.5em]">Shopping Cart</p>
          <div className="flex justify-end w-[85%] md:w-[94%]">
            <p>price</p>
          </div>

          <hr className="border-0 h-[1px] md:w-[100%] bg-slate-400 mt-[1em]" />
          {cart.map((item, index) => (
            <CartItem key={index} item={item} deleteHandler={deleteHandler} />
          ))}
        </div>

        <div className="flex md:flex-col md:w-[25%] md:gap-[1.5em] ">
          <div className="bg-white md:p-[2em] rounded gap-[2em] w-[100%]  flex flex-col justify-center items-center md:flex-col md:gap-[1em]">
            <p className="font-bold mt-[1em]">
              Subtotal (
              {cart.length < 1 ? `${cart.length} item` : `${cart.length} items`}
              ) {`$${totalPrice}`}
            </p>
            <button className="bg-[#ffa500] p-[10px] mb-[1em] text-white rounded">
              Proceed to checkout
            </button>
          </div>
          <div className="bg-white md:p-[2em] rounded ">
            <img src="/icons/prime.svg" alt="" />
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;

{
  /* <div className="bg-slate-400 pt-[6em] h-[80vh] px-[2em] flex items-center flex-col">

<p className="text-2xl font-bold p-[1rem] text-[white] ">
  Your cart is empty.
</p>

<div className="p-2 w-[100%]">

  <p className="text-xl">
    Your Shopping Cart lives to serve. Give it purpose — fill it with
    groceries, clothing, household supplies, electronics, and more.
    Continue shopping on the{" "}
    <Link className="text-[#ffa500]" to="/">
      Oward
    </Link>{" "}
    Homepage.
  </p>

</div>

</div> */
}
