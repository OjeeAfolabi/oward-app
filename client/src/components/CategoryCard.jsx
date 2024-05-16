import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = () => {
  return (
    <div className='bg-[white] w-[80%] rounded md:w-[25rem] md:p-[1rem] '>
        <div className='p-4 flex flex-col justify-center items-center gap-3 '>
            <p className='font-semibold md:text-lg'>Shoes & Sneakers</p>
            <div className='w-[80%] bg-[#fdeaed] p-4 rounded md:w-[100%]'>
          <img src="images/shoetest.png" alt="" />
        </div>
        <div>
          <Link className='text-[#ffa500]'><strong>Shop Now</strong></Link>
        </div>
        </div>
        
    </div>
  )
}

export default CategoryCard