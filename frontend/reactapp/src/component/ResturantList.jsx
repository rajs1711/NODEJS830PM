import React,{useState ,useEffect} from 'react'
import axios from 'axios';
const ResturantList=()=>{

   const [resturants,setResturants]=useState([]);
   useEffect(()=>{
         // code to fecth data from API 
         const fetchResturants=async()=>{
            const API_ENDPOINT='http://localhost:5000/api/v1/listallresturants';
            const response= await axios.get(API_ENDPOINT);
            if(response.data.success==true){
              setResturants(response.data.resturants);
            }else{
                console.log(response);
                console.log('Error');
                setResturants([]);
            }
        }
        fetchResturants()
   },[]);


    return(
        <>
          <div>   
           <h2 className="text-4xl font-bold dark:text-white">All Resturants</h2>
          </div>
          <br></br>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Resturant
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Location
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Timing
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Rating
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Cusine
                        </th>
                    </tr>
                </thead>
                <tbody>
                     { resturants.map((data)=>(
                    <tr key={data._id}className="border-b border-gray-200 dark:border-gray-700">
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            {data.title}ss
                        </td>
                        <td className="px-6 py-4">
                            {data.state}-{data.city}
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            {data.openTime}-{data.closeTime}
                        </td>
                        <td className="px-6 py-4">

                        {data.rating==3 && 
                          <div><i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i></div>
                         }
                         {data.rating==4 && 
                          <div><i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          </div>
                         }
                         {data.rating==5 && 
                          <div><i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          </div>
                         }
                          {data.rating==5 && 
                          <div><i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          </div>
                         }
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            <ol>
                                 { data.cusine.map((cusines)=>(
                               <li>{cusines}</li>))}
                            </ol>
                        </td>
                    </tr>
                    )
                   )}
                </tbody>
            </table>
        </div>

        </>
    )
}

export default ResturantList