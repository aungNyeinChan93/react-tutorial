import React from "react";
import { useState ,} from "react";
import { useNavigate } from "react-router-dom";
import myproductData from "../../Context/productContext";
import { useContext } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const navigateToDashboard = useNavigate();
  // console.log(navigateToDashboard);

  const {setUser} = useContext(myproductData);


  function fromHandeler(e) {
    e.preventDefault();
    // console.log(userName, email);
    if(!userName || !email) return
    setUser(userName)
      navigateToDashboard("/dashboard")

  }
  console.log(userName);
  return (
    <div className="Login container-fluid min-vh-100 bg-dark-subtle ">
      <h2 className="Login-title text-center text-muted ">Login Page</h2>
      <form action=" " onSubmit={fromHandeler} className=" bg-info p-4 rounded-4 my-3 shadow-lg">
        <input
          type="text"
          placeholder="Enter Yor Name"
          className=" form-control my-3 shadow-sm border-danger-subtle form-control-lg"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Yor Email"
          className=" form-control my-3 shadow-sm border-danger-subtle form-control-lg"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn btn-danger px-3 my-3" >
          Submit
        </button>
      </form>
   
    </div>
  );
};

export default Login;
