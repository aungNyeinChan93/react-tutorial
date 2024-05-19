import React from 'react'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Dashborad = () => {
  return (
    <div className='Dashborad container-fluid min-vh-100 bg-dark-subtle'>
        <h3 className='Dashborad-title text-center text-decoration-underline'>Dashborad Page</h3>
        <div className="btn-grp text-center ">
          <button className="btn btn-success text-decoration-none me-3">
            <Link className='text-decoration-none text-white ' to="/" >Go To Home</Link>
          </button>
          <button className="btn btn-success text-decoration-none me-3">
            <Link className='text-decoration-none text-white ' to="userpage" >Go To User Page</Link>
          </button>
          <button className="btn btn-success text-decoration-none me-3">
            <Link className='text-decoration-none text-white ' to="profilepage" >Go To Profile Page</Link>
          </button>
        </div>
        <Outlet/>
    </div>  
  )
}

export default Dashborad;
