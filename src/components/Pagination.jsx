import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const {page, handlePageChange, totalPages} = useContext(AppContext);
  return (
    <div className='w-full flex justify-center items-center border-t-2 border-t-gray-300 py-4 fixed bottom-0 bg-white z-10'>
      <div className='flex justify-start items-center gap-x-2 w-11/12 max-w-[630px]'>
        {page >1 &&
          (<button  className='rounded-md border py-1 px-4 text-sm font-medium'
          onClick={()=>handlePageChange(page-1)}>
            Previous
          </button>)
        }
        {page<totalPages &&
          (<button className='rounded-md border py-1 px-4 text-sm font-medium'
          onClick={() => handlePageChange(page+1)}>
            Next
          </button>)
        }
      </div>
        <p className='font-bold text-xs'>
          Page {page} of {totalPages}
        </p>
      
    </div>
  )
}

export default Pagination