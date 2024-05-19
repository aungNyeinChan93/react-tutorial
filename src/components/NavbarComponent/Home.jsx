import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='Home container-fluid bg-dark-subtle min-vh-100 '>
        <h4 className='Home-title text-center'>Home Page</h4>
        <div className="btn-grp">
            <button className="btn btn-success text-decoration-none me-3">
                <Link className='text-decoration-none text-white ' to="dashboard" >Go To Dashboard Page</Link>
            </button>
            <button className="btn btn-success text-decoration-none me-3">
                <Link className='text-decoration-none text-white ' to="error" >Go To Error Page</Link>
            </button>
        </div>

    </div>
  )
}

export default Home
