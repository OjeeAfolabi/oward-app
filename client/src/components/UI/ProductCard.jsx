
const ProductCard = () => {
  return (
      <div className="w-[40%] md:w-[20%] flex flex-col  justify-center items-center gap-2 md:gap-4 p-4 rounded border-2 border-slate-600  m-3">
        <img className="w-[7rem] " src="images/newbalance.png" alt="" />
        <div>
          <p className="border border-[#ffa500] p-1 rounded md:font-semibold ">
            New Balance W690bo3 Navy/Orange
          </p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <p className="bg-slate-800 text-[14px] p-[3px] md:text-[20px] md:p-[8px] rounded text-[white]">$45</p><button className="bg-[#ffa500] rounded md:p-[8px] md:text-[20px] text-[13px] p-[3px] ">Add to cart</button>
        </div>
      </div>
    
  )
}

export default ProductCard