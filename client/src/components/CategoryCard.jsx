/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'

const CategoryCard = ({data}) => {
let id = data.collection[0].id
 

  return (
    <div className='bg-[white] w-[80%] rounded md:w-[25rem] md:p-[1rem]'>
        <div className='p-4 flex flex-col justify-center items-center gap-3 '>
            <p className='font-semibold md:text-lg'>{data.name}</p>
            <div className='w-[80%] bg-[#fdeaed] p-4 rounded md:w-[100%]'>
          <img src={data.image} alt="images" />
        </div>
        
        <div>
          <Link to ={`/${id}`} className='text-[#ffa500]'><strong>Shop Now</strong></Link>
        </div>
        </div>
        
    </div>
  )
}

export default CategoryCard