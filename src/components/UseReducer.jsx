import React from 'react'
import { useState  ,useReducer} from 'react'


const initValue = {
  counter: 0,
}
function reducer(state,action){
  console.log(state ,action);
  if (action.type==="Increase"){
    return {state,counter: state.counter + action.payload}
  }
  if(action.type==="Decrease"){
    return {state,counter:state.counter - action.payload}
  }
}

const UseReducer = () => {
  const [counter, setCounter ] = useState(0);
  const [state,dispatch] = useReducer(reducer,initValue);


   return (
    <div className='useReducer min-vh-100 bg-light-subtle container-fluid my-2'>
        <h1 className="useReducer-title text-center bg-danger-subtle p-2 rounded-4">UseReducer Hook</h1>
        <div className="counter-app container-sm text-center bg-info w-50 p-2 rounded-5 my-3 shadow-sm">
          <h4>{counter}</h4>
          <div className="btn btn-group">
            <button className='btn btn-danger px-4' onClick={()=>setCounter((pre)=>pre+1)}> +</button>
            <button className='btn btn-danger px-4' onClick={()=>setCounter((pre)=>pre-1)}> -</button>
          </div>
        </div>
        <div className="counter-appWithUseReducer container-sm text-center bg-info w-50 p-2 rounded-5 my-3 shadow-sm">
          <h4>useReducer : {state.counter}</h4>
          <div className="btn btn-group">
          <button className='btn btn-danger px-4' onClick={()=>dispatch({type:"Increase", payload:1})}> +</button>
            <button className='btn btn-danger px-4' onClick={()=>dispatch({type:"Decrease", payload:1})}> - </button>
          </div>
        </div>
    </div>
  )
}

export default UseReducer
