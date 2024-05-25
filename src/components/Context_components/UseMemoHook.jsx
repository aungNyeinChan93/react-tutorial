import React, { useState ,useMemo} from 'react'

const UseMemoHook = () => {
    const [count,setCount] =useState(0);
    const [todo,setTodo] = useState([]);
    /* 
    * useMemo
    const cachedValue = useMemo(calculateValue, dependencies)
    * Reference
    useMemo(calculateValue, dependencies)
    * Usage
    Skipping expensive recalculations
    Skipping re-rendering of components
    Memoizing a dependency of another Hook
    Memoizing a function
    -----------------------------------
    useCallback returns a memoized callback function, 
    while useMemo returns a memoized value. 
    Both hooks can be used to optimize the performance of your React components 
    by avoiding unnecessary re-creations of functions or values.
    */
    const heightCalculation  = useMemo(()=> intenstiveCaluculate(count),[count]);

    const addListFunction = (todo)=>{
        setTodo((todo)=>{
            return [...todo,{item:"addlist"}]
        })
    };

    return (
    <div className='UseMemoHook min-vh-100'>
        <h1 className='text-danger text-center fw-bolder  p-1'> useMemo Hook</h1>
        <div className="counter container-sm bg-danger-subtle p-3 text-center my-3">
            <h2 >Counter :{ count}</h2>
            <button className='btn btn-info' onClick={()=>setCount((preCount)=>preCount+1)}>Increase</button>
        </div>
        <div className="heightCalculation container-sm bg-info p-4">
            <h2 className='text-center  p-2 my-4'>HeavyCalculation</h2>
            <h1>{heightCalculation}</h1>
        </div> 
        <div className="todoList container-sm bg-dark-subtle p-4 my-3">
            <ul className=' list-group'>
                {todo.map((t,index)=>{
                    return <div key={index} >
                        <li key={index} className=' list-group-item rounded p-2 my-1'>{t.item} : {index}</li>
                    </div>
                })}
                <button className='btn btn-success w-25 mx-auto my-2' onClick={()=>addListFunction()}>Add List</button>
            </ul>
        </div>
    </div>  
  )
}
//-----------------------------------------------------
const intenstiveCaluculate =(number)=>{
    console.count("intenstive Calculation render...")
    for (let i=0; i<1000; i++){
        number+=1
    };
    return number;
}


export default UseMemoHook
