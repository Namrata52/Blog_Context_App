import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const TagPage = () => {
    const navigation = useNavigate();
    const location =useLocation();
    
    const tag =location.pathname.split("/").at(-1);
  return (
    <div className='flex flex-col items-center'>
        <Header/>
        <div className='mt-[100px] w-11/12 max-w-[750px]'>
            <button className='rounded-md border py-1 px-4 text-sm font-medium mb-3 -mx-3'
            onClick={()=>navigation(-1)}>Back</button>
            <h2 className='text-2xl mt-6 font-semibold'>Blog Tagged
                <span>#{tag}</span>
            </h2>
        </div>
        <div className='w-11/12 max-w-[750px] flex flex-col gap-y-10 -mt-[70px] mb-[40px]'>
            <Blogs/>
        </div>
        <Pagination/>

    </div>
  )
}

export default TagPage