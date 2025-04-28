import React,{useState ,useEffect} from 'react'
import Sidebar from '../component/Sidebar';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CreateOrder(){
    
    const [foods ,setFoods]=useState([]);
    // to get list of Items
    useEffect(()=>{
            // code to fecth data from API 
            const fetchFoods=async()=>{
            const API_ENDPOINT='http://localhost:5000/api/v1/listallfoods';
            const response= await axios.get(API_ENDPOINT);
            //console.log(response.data.success)
            if(response.data.success==true){
                console.log(response.data.foods)
                    setFoods(response.data.foods);
            }else{
                console.log(response);
                console.log('Error');
                setFoods([]);
            }
        }
        fetchFoods()
    },[]);
    

    const [formData,setFormdata]=useState({
        email:'',
        mobile:'',
        code:'',
        customer_name:'',
        coupancode:'',
        delivery_address:''
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
            const API_ENDPOINT='http://localhost:5000/api/v1/orderfood';
            const response= await axios.post(API_ENDPOINT,formData);
            if(response.status=='200'){
                //now blank input fields
                setFormdata({
                    email:'',
                    mobile:'',
                    code:'',
                    customer_name:'',
                    coupancode:'',
                    delivery_address:''
                });
                setResponseMessage('Order Created  Successfully ');
                console.log(response.data,'=======');
            }else{
               setResponseMessage('Server Error,Try Again');
            }
        }catch(err){
         console.log('Error while Createing Order',err);
      }
    }


    return(
        <>
        <Sidebar/>
        <div className="p-4 sm:ml-64">
             <div className="p-4 border-2 border-orange-200 border-dashed rounded-lg dark:border-orange-700">
                   <div className="grid grid-cols-1 gap-4 mb-4">
                        <div className="rounded-sm border-2 border-b-black-700">
                            <div>
                                <br></br>
                                 {responseMessage &&(
                                  <p style={{color:'green'}}>{responseMessage}</p>
                                   )
                              }
                            <form onSubmit={handleSubmit}className="max-w-md mx-auto">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="customer_name"value={formData.customer_name} onChange={handleChange} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cutomer Name</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="email" name="email"value={formData.email} onChange={handleChange} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="mobile" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Mobile</label>
                            </div>
                            <label for="Item" className="sr-only">Item</label>
                            <select id="Item" name="code" value={formData.code}  onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                <option selected>Choose Item</option>
                                {foods.map((data)=>(
                                    <option key={data.code}value={data.code}>{data.name}</option>

                                ))}
                            </select>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="coupancode" value={formData.coupancode} onChange={handleChange} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Coupan Code</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="delivery_address" value={formData.delivery_address} onChange={handleChange} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Delivery Address</label>
                            </div>

                            <br></br>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
                            <br></br><br></br>
                            </form>
                            </div>
                        </div>
                    </div>
             </div>
        </div>
        </>
    )
}

export default CreateOrder