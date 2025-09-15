// import React from "react";

import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import ProductCard from "./UI/ProductCard";
import axios from "axios";
import Loading from "./UI/Loading";

const Search = () => {
  const [searchProducts, setSearchProducts] = useState(null);
  const [loading, setLoading] = useState();

  const context = useOutletContext();
  const overflow = context.value;

  const getSearchProducts = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = { search: context.cacheValue };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_OWARD_URL}/search`,
        body,
        config,
        {
          withCredentials: true,
        }
      );
      // console.log('result',res.data.data)
      setSearchProducts(res.data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    document.body.style.overflowY = overflow;
  }, [overflow]);

  useEffect(() => {
    // console.log('search is running',context.cacheValue)
    setSearchProducts(null);
    setLoading(true);
    if (context.cacheValue) {
      const fetch = async () => {
        await getSearchProducts();
      };
      fetch();
    }
  }, [context.clickValue]);

  return (
    <div className="mt-[8em] lg:mt-[6em] flex w-[100%] flex-wrap justify-center">
      {loading && <Loading />}
      {searchProducts &&
        !loading &&
        searchProducts.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
    </div>
  );
};

export default Search;
