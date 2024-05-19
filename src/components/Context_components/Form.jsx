import React, { useContext } from "react";

import MyContextOne from "../../Context/MyContextOne";

const Form = () => {
  const personOne = useContext(MyContextOne);
  console.log(personOne);

  return (
    <div className="form  container-fluid  bg-dark-subtle my-2 p-2">
        <h1 className="form-title text-center text-white p-1  rounded shadow-sm bg-danger text-capitalize">My Form</h1>
      <form action="" className=" d-flex justify-content-center align-items-center">
        <input value={personOne.name} type="text" placeholder="Enter your Name" className="form-control form-control-md mt-3"/>
        <button className="btn btn-danger px-3 mx-2 mt-3" type="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
