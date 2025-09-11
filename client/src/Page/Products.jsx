// import React from 'react'
import ProductCard from "../components/UI/ProductCard";
import { useOutletContext, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../components/UI/Loading";

const Products = () => {
  const [products, setProducts] = useState(null);
  const { productsID } = useParams();
  const [loading, setLoading] = useState(true)
  // console.log("products", products)
  // const [stateID] = useState(productsID)

  const context = useOutletContext();
  const overflow = context.value;

  const getProducts = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = { productsID: productsID };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_OWARD_URL}/products`,
        body,
        config
      );
      console.log('all products result',res)
      setProducts(res.data.data);
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    document.body.style.overflowY = overflow;
  }, [overflow]);

  useEffect(() => {
    setProducts(null);
    setLoading(true)
    if (productsID) {
      const fetch = async () => {
        await getProducts();
      };
      fetch();
      // setLoading(false)
    }
  }, [productsID]);

  return (
    <div className="mt-[8em] lg:mt-[6em] flex w-[100%] flex-wrap justify-center">
      {loading &&
        <Loading/>}
      {products && !loading &&
        products.map((item, index) => <ProductCard key={index} item={item} />)}
    </div>
  );
};

export default Products;
