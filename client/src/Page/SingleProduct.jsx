/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useParams, useOutletContext } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../components/UI/Loading";

const SingleProduct = ({ setCart }) => {
  const [singleproduct, setSingleProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { singleID } = useParams();

  const idList = singleID.split("-");
  const asinId = idList[0];
  const catId = idList[1];

  const context = useOutletContext();
  const overflow = context.value;

  // console.log("userID", context.userID)
  // console.log("userCart", [...context.userCart,singleproduct])
  // console.log("single",singleproduct )

  // const [cartcache, setCartCache] = useState([...context.userCart])
  // console.log("singleproduct", singleproduct)

  const AddToCart = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let cartCache = [...context.userCart, singleproduct];
    const body = JSON.stringify({ id: context.userID, cartValue: cartCache });

    try {
      const res = await axios.patch(
        `${import.meta.env.VITE_OWARD_URL}/cart`,
        body,
        config
      );
      // console.log(res.data);
      setCart((prev) => [...prev, singleproduct]);
    } catch (error) {
      console.log(error.response);
    }
  };

  const getSingleProduct = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = { asinId, catId };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_OWARD_URL}/singleproduct`,
        body,
        config
      );
      console.log('single products result',res)
      setSingleProduct(res.data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    document.body.style.overflowY = overflow;
  }, [overflow]);

  useEffect(() => {
    setSingleProduct(null);
    setLoading(true);
    if (singleID) {
      const fetch = async () => {
        await getSingleProduct();
      };
      fetch();
    }
  }, [singleID]);

  return (
    <>
      {loading && <Loading />}
      {singleproduct && !loading && (
        <div className="flex flex-col md:flex-row justify-center md:p-[4rem] p-2 mt-[4em] w-full items-center gap-[4rem]">
          <div className=" flex justify-center items-center">
            <img src={singleproduct["product_photo"]}></img>
          </div>

          <div className="p-1 md:w-[30%] w-full flex flex-col gap-2">
            <p className="font-bold text-[1.5em]">
              {singleproduct["product_title"]}
            </p>
            <p className="">{singleproduct["product_description"]}</p>
            <p className="">
              {singleproduct["about_product"]
                ? singleproduct["about_product"][0]
                : ""}
            </p>
            <p className="">Rating:{singleproduct["product_star_rating"]}</p>
            <p className="font-bold">{`$${singleproduct["product_price"]}`}</p>
            <button
              onClick={AddToCart}
              className="bg-[#ffa500] text-white rounded p-2 mt-4"
            >
              Add to cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
