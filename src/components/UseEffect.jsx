import React from "react";
import { useState, useEffect } from "react";

const UseEffect = () => {
  const [value, setValue] = useState(0);
  const [size,setSize] = useState(window.innerWidth)
  useEffect(()=>{
    console.log("UE running");
    window.addEventListener("resize", function (){
        setSize(this.window.innerWidth);
        // cleanup function 
        return ()=>{
            console.log("cleanup function is running");
            this.window.removeEventListener("resize",()=>{
                setSize(this.window.innerWidth)
            })
        }
    })
  })

  return (
    <div className="UseEffect container-fluid min-vh-100  bg-danger-subtle ">
      <h1 className="useEffect-title bg-body-tertiary text-center fs-4 rounded p-2 text-capitalize my-2">
        useEffect Hook!
      </h1>
      <div className="useEffect-container container-lg bg-info p-2 rounded text-center">
        <h1 className="fs-1 fw-bolder ">{value}</h1>
        <button
          className="btn-useEffect  btn btn-danger"
          onClick={() => setValue(value + 1)}
        >
          click
        </button>
      </div>
      <div className="windowSize-container container-lg bg-info p-2 rounded text-center my-2">
        <h2 className="fs-1 fw-bolder ">window.innerWidth : <span className="fs-1 text-danger fst-italic">{size} </span>px</h2>
      </div>
    </div>
  );
};

export default UseEffect;
