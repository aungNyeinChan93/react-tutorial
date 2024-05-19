import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="ErrorPage container-fluid min-vh-100 bg-danger-subtle  d-flex flex-column justify-content-evenly align-items-center">
      <h2 className="fs-1  text-muted">Opps! 404 Not Found</h2>
      <button className="btn btn-warning px-3">
        <Link to="/" className=" text-decoration-none text-light fs-5 "> Back To Home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
