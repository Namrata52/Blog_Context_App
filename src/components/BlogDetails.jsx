import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div>
        <div key={post.id} className='py-2 cursor-pointer'>
            <NavLink to={`/blog/${post.id}`}>
                 <span className='font-bold text-lg'>{post.title}</span>
                 </NavLink>
                <p className='text-xs mt-2'>
                    By <span className='italic'>{post.author}</span> on {" "}
                    <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                         <span className='underline font-semibold'>{post.category}</span>
                    </NavLink>
              </p>
                
                <p className='text-xs mt-1'> Posted on <span>{post.date}</span></p>

                <p className='text-sm mt-5 font-medium line-height:1.625'>{post.content}</p>

                <div className='flex gap-x-3 flex-wrap'>
                    {post.tags.map((tag,index) =>{
                            return <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}><span  
                            className='text-sky-500 font-semibold underline text-xs mt-[5px]'>{`#${tag}`}</span></NavLink>
                      })}
                </div>
              </div>
    </div>
  )
}

export default BlogDetails
