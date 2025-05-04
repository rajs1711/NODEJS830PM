import React,{useState ,useEffect} from 'react'
import Sidebar from '../component/Sidebar';
import { Link ,useLocation,useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditOrder(){
    const location=useLocation();
    const navigate=useNavigate();
    const {id}=useParams();
    const [formData,setFormData]=useState(location.state.formData)
    
    console.log(id)
    console.log(formData)
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
    

    // const [formData,setFormdata]=useState({
    //     email:'',
    //     mobile:'',
    //     code:'',
    //     customer_name:'',
    //     coupancode:'',
    //     delivery_address:''
    // });

    const [showToast, setShowToast] = useState(true);
    const[responseMessage,setResponseMessage]=useState('');
    
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    };
   
    const handleSubmit=async(e)=>{
      e.preventDefault();// suspend default behavior of submit form which is page refresh
       
      try{
            const token=localStorage.getItem('logintoken');
            // logic to hit api and send formdata
            // axios helps to hit api npm install axios
            const API_ENDPOINT='http://localhost:5000/api/v1/updateorder';
            const response= await axios.post(API_ENDPOINT,formData,
                {
                  headers:{
                    Authorization:`Bearer ${token}`,
                    'Content-Type':'application/json'
                    }
               }
            );
            
            if(response.status=='200'){
              setResponseMessage('Order Updated Successfully');
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
                                 {responseMessage && showToast &&(
<div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
        <span className="sr-only">Check icon</span>
    </div>
    <div className="ms-3 text-sm font-normal">{responseMessage}</div>
    <button type="button"onClick={() => setShowToast(false)} className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
        <span className="sr-only">Close</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg> 
    </button>
</div>
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
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="status" value={formData.status} onChange={handleChange} id="status" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Status</label>
                            </div>

                            <br></br>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
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

export default EditOrder