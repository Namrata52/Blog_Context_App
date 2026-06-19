import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

const Blogs = () => {

  const {loading, posts} = useContext(AppContext);
  
  return (
    <div className='w-11/12 max-w-[750px] flex flex-col gap-y-10 mt-[100px] mb-[100px]'>
      {
        loading 
        ?(<div className='min-h-[80vh] w-full flex justify-center items-center'>
          <Spinner/>
        </div>) 
        :(posts.length === 0 
            ? (<div>
                <p>No posts found</p>
               </div>) 
             : (posts.map((post)=>(
                //  return <Card post = {post}/>

                <BlogDetails key={post.id} post={post}/>
             ))
               )
          )
      }

    </div>
  )
}

export default Blogs