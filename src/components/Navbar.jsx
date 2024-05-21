import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
   <div className="Navbar bg-warning container-fluid rounded-1  fs-6 my-2">
        <ul className="nav  justify-content-around">
            <li className="nav-item">
                <NavLink className={({isActive})=>isActive?"nav-link text-danger fw-bold":"nav-link text-primary"}to="/">Home </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={({isActive})=>isActive?"nav-link text-danger fw-bold":"nav-link text-primary"} to="about">About </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={({isActive})=>isActive?"nav-link text-danger fw-bold":"nav-link text-primary"} to="contact">Contact </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={({isActive})=>isActive?"nav-link text-danger fw-bold":"nav-link text-primary"} to="product">Product </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={({isActive})=>isActive?"nav-link text-danger fw-bold":"nav-link text-primary"} to="login">Login </NavLink>
            </li>
            <li className="nav-item">
                <NavLink style={({isActive})=>{
                    return {color: isActive? "red" :"green",fontSize:"20px",fontFamily:"monospace"}
                }}  className="nav-link" to="test"> Test </NavLink>
            </li> 
        </ul> 
   </div>
  );
};

export default Navbar;
