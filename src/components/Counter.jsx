import React from 'react';
import { useState } from 'react';

const Counter = () => {
    let [counter ,setCounter] = useState(0);

    function doubleCounter(){
        setCounter((preCounter)=>preCounter+1)
        setCounter((preCounter)=>preCounter+1)
    }
    return (
        <div className='Counter w-75' style={{textAlign:"center", backgroundColor:"gray ",padding:"10px 10px" ,borderRadius:"10px", margin:"10px 50px"}}>
            <h1 style={{marginTop: "10px"}}>{counter}</h1>
            <button style={{padding:"10px", }} onClick={()=>setCounter((preCounter)=>preCounter+=1)}>Counter</button>
            <button onClick={()=>doubleCounter()} style={{padding:"10px",marginLeft:"10px" }} >Double counter</button>
        </div>
    )
};

export default Counter
