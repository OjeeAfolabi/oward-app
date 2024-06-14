/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {

  return (
    <Link to ={`${item.asin}`} className="w-[40%] md:w-[25%] flex flex-col items-center gap-1 md:gap-2 px-2 py-4 rounded border-2 border-slate-200  m-3">
      <div className=" flex justify-center h-[10em] lg:h-[16em] w-[100%]">
        <img className="h-[100%]" src={item["product_photo"]} alt="" />
      </div>
      <div>
        <p className="p-1 rounded hidden lg:flex">{item["product_title"]}</p>
        <p className="p-1 rounded flex lg:hidden ">{`${item[
          "product_title"
        ].slice(0, 20)}...`}</p>
      </div>
      <div className="flex flex-col gap-1 w-[100%]">
        <p className="flex items-center gap-1 ">
          <span className="text-[#ffa500] font-bold">rating:</span>{" "}
          {item["product_star_rating"]}
        </p>
        <p className=" text-[14px]  text-left font-bold text-slate-800 md:text-[20px] rounded">{`${item["product_price"]}`}</p>
        <p className="mt-4 gap-1 hidden lg:flex flex-col text-left ">
          <span className="font-bold">Delivery:</span>
          {item["delivery"]}
        </p>
        <p className="flex flex-col lg:hidden gap-1 text-left ">
          <span className="font-bold">Delivery:</span>
          {`${
            item["delivery"]===null ? "" : item["delivery"].slice(0, 14)
          }...`}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
