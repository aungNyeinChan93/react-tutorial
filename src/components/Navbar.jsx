import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
   <div className="Navbar bg-warning container-fluid rounded-1  fs-6 my-2">
        <ul className="nav  justify-content-around">
            <li className="nav-item">
                <Link className="nav-link "to="/">Home </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="about">About </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="contact">Contact </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link " to="product">Product </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link  " to="login">Login </Link>
            </li>
        </ul>
   </div>
  );
};

export default Navbar;
