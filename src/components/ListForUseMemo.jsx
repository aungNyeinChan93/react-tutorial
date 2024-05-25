import React from 'react'
import { memo } from 'react';

const ListForUseMemo =memo(({posts,deleteFunction}) => {
    // console.log(posts);
    /*
    * memo
    memo(Component, arePropsEqual?)
    * Usage
    Skipping re-rendering when props are unchanged
    Updating a memoized component using state
    Updating a memoized component using a context
    Minimizing props changes
    Specifying a custom comparison function
    *  note >>>> memo can not effect/run when we passed the props-function 
    ----------------------------------------------------------------------
    */
  return (
    <div className='ListForUseMemo container-sm my-2'>
      <ul className='list-group'>
        {posts.map((item,index)=>{
            // console.count("render-count")
            return <div className="container row p-2 mx-auto">
                <li className=' list-group-item col-10' key={item.id}>{item.name}</li>
                <button onClick={()=>deleteFunction(item.id)} className='btn btn-danger btn-sm mx-2 col-1'>Delete</button>
            </div>
            
        })}
      </ul>
    </div>
  )
}) 

export default ListForUseMemo
