import React from 'react'

const Form=()=>{
      const handleClick=(name)=>{
        //events with data
        console.log(name);
        console.log('Event with data');
      }
    const handleClick2=()=>{
        //events with data
        console.log('Event without data');
      }
    return(
        <>
           <div>
           
           <input type="button" name="signin" onClick={()=>handleClick('raj')} value="SignIn" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"/>
           <input type="button" name="signin2" onClick={handleClick2} value="SignIn" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"/>
           
           </div>
        </>
    )
}

export default Form