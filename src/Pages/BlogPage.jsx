import React, { useContext, useEffect, useState } from 'react'
import { useNavigate,useLocation} from 'react-router-dom';
import Header from '../components/Header';
import { AppContext } from '../context/AppContext';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
        const[relatedblogs, setRelatedBlogs] = useState([]);
        const location = useLocation();
        const navigation = useNavigate();
        const {setLoading, loading} = useContext(AppContext);

        const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
            setLoading(true);
            let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
            console.log("URL is: ");
            console.log(url);
            try {
                const res = await fetch(url);
                const data = await res.json();
                
                setBlog(data.blog);
                setRelatedBlogs(data.relatedBlogs);
            }
            catch(error) {
                console.log("Error aagya in blog id wali call");
                setBlog(null);
                setRelatedBlogs([]);
            }
            setLoading(false);
        }
    
        useEffect( () => {
            if(blogId) {
                fetchRelatedBlogs();
            }
        }, [location.pathname] )

  return (
    <div className='w-11/12 max-w-[750px] flex flex-col gap-y-10 mt-[100px] mb-[100px]'>
        <Header/>
        <div>
            <button className='rounded-md border py-1 px-4 text-sm font-medium mb-3 -mx-3'
            onClick={()=>navigation(-1)}>Back</button>
            {
                loading ?(<div>
                    <p>Loading</p></div>):
                    blog?(
                        <div>
                            <BlogDetails post={blog}/>
                            <h2 className='text-2xl mt-6 font-semibold'>Related Blogs</h2>
                            {
                                relatedblogs.map((post)=>(
                                    <div key={post.id}><BlogDetails post={post}/></div>
                                ))
                            }
                        </div>
                    ):(
                        <div>
                            <p>No blog found</p>
                        </div>
                    )
            }
        </div>
    </div>
  )
}

export default BlogPage
