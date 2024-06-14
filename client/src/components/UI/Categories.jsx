/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

// import React from "react";
const CategoryItem = ({ item, setModal, setOverflow }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    setModal(false);
    setOverflow("auto");
    navigate(`/${item.id}`);
  };
  return (
    <button
      onClick={clickHandler}
      className="flex w-full text-black hover:text-[#ffa500]"
    >
      {item.name}
    </button>
  );
};

const Categories = ({ data, setModal, setOverflow }) => {
  return (
    <>
      <p className="text-lg mt-4 font-bold">{data.name}</p>
      {data.collection.map((item, index) => (
        <CategoryItem
          setModal={setModal}
          setOverflow={setOverflow}
          key={index}
          item={item}
        />
      ))}
      <hr />
    </>
  );
};

export default Categories;
