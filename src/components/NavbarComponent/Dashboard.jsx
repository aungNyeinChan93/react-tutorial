import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import myproductData from "../../Context/productContext";

const Dashborad = () => {
  const { user } = useContext(myproductData);
  // console.log(user);
  return (
    <div className="Dashborad container-fluid min-vh-100 bg-dark-subtle">
      <h3 className="Dashborad-title text-center text-capitalize fw-bold text-bg-info py-2 rounded ">
        {user} Dashborad Page
      </h3>
      <div className="btn-grp text-center ">
        <button className="btn btn-success text-decoration-none me-3">
          <Link className="text-decoration-none text-white " to="/">
            Go To Home
          </Link>
        </button>
        <button className="btn btn-success text-decoration-none me-3">
          <Link className="text-decoration-none text-white " to="userpage">
            Go To User Page
          </Link>
        </button>
        <button className="btn btn-success text-decoration-none me-3">
          <Link className="text-decoration-none text-white " to="profilepage">
            Go To Profile Page
          </Link>
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashborad;
