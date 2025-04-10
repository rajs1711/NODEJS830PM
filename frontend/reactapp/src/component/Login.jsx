import React,{useState} from 'react';
import axios from 'axios';
function Login(){
   
    const [formData,setFormdata]=useState({
        username:'',
        password:''
    });
    

    const[responseMessage,setResponseMessage]=useState('');
    
    const handleChange=(e)=>{
        setFormdata({
            ...formData,
            [e.target.name]:e.target.value
        });
    };
   
    const handleSubmit=async(e)=>{
      e.preventDefault();// suspend default behavior of submit form which is page refresh
       
      try{
            // logic to hit api and send formdata
            // axios helps to hit api npm install axios
            const API_ENDPOINT='http://localhost:5000/api/v1/login';
            const response= await axios.post(API_ENDPOINT,formData);
            if(response.status=='201'){
                //now blank input fields
                setFormdata({
                    username:'',
                    password:''
                });
                // store token in local storage
               
                if(response.data.data.length > 0){
                    const mytoken =response.data.data[0].token;
                    localStorage.setItem('logintoken',mytoken);
                    //code to redner next window
                    // viewprofile
                }
                setResponseMessage('Login Successfully ');
                
            }else{
               setResponseMessage('Server Error,Try Again');
            }
        }catch(err){
         console.log('Error while Login',err);
      }
    }


    return(
        <>
        <div className="formbg rounded-md border bg-white">
        {
            responseMessage &&(
                <p style={{color:'red'}}>{responseMessage}</p>
            )
        }
        <form  onSubmit={handleSubmit}className="max-w-sm mx-auto">
        <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-lg text-center font-medium text-gray-900 dark:text-white">LogIn</label>
        </div>

        <div className="mb-5">
            <label htmlFor="Email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
            <input type="email" 
            id="username" 
            name="username"
            value={formData.email} 
            onChange={handleChange} 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email" required />
        </div>
        <div className="mb-5">
            <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
            <input type="text" 
            id="password" 
            name="password" 
            value={formData.password}
            onChange={handleChange} 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Mobile" required />
        </div>
        <div className="flex justify-end">
        <button type="submit" 
        name="loginbtn"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>

        </div>
        </form>
        </div>
        </>
    )

    
}
export default Login