import React from 'react'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination';
import Header from '../components/Header';

const Home = () => {
    
  return (
    <div className="w-full h-full flex flex-col gap-y-5 items-center">
        <Header/>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default Home