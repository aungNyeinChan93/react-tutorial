import React, { useEffect } from "react";
import { useState , useRef} from "react";


const UseRef = () => {
    const[userName,setUsername] =useState("");
    const[email,setEmail] =useState("");
    const password = useRef("")

  function formHandler(e) {
      // console.log(e.target.children[2]);
      e.preventDefault();
      console.log(userName , email);
      console.log(password.current.value);  
  }
  useEffect(()=>{
    password.current.focus();
    console.log(password.current);
  },[])
  return (
    <div className="UseRef container-fluid bg-dark-subtle min-vh-100 ">
      <h1 className="useRef-title p-2 text-center rounded bg-warning ">
        UseRef Hook
      </h1>
      <form
        className="form-container container-lg"
        onSubmit={formHandler}
      >
        <input
          type="text"
          className="form-control form-control-md my-3"
          placeholder="Enter your name"
          onChange={(e)=>setUsername(e.target.value)}
          value={userName}
        />
        <input
          type="email"
          className="form-control form-control-md my-3"
          placeholder="Enter your email"
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          className="form-control form-control-md my-3"
          placeholder="Enter your password || use useRef"
          ref={password}
          
        />
        <button className="btn btn-danger px-3 py-2 " type="submit">
          Submit button
        </button>
      </form>
      {/* result section */}
      <div className="result-grp container bg-white p-4 my-3 rounded-1 text-center">
        <h5>username:{userName}</h5>
        <h5>email :{email}</h5>
        <h5>password :{password.current.value}</h5>
      </div>
    </div>
  );
};

export default UseRef;
