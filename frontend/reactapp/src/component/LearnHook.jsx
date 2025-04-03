import React ,{useState} from 'react'

function LearnHook(){
    const [count,setCount]=useState(0);
   //note : count is variable
   // setCount is a function 
   //useState = hook
   //useState(0) intial value of variable is 0   

    return(
        <>
        <h1>Learn Hook Create Counter</h1>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+1)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Increase</button>
        <button onClick={()=>setCount(count-1)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Decrease</button>
        </>
    )
}

export default LearnHook