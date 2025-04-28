import React,{useState ,useEffect} from 'react'
import Sidebar from '../component/Sidebar';
import { Link } from 'react-router-dom';
import axios from 'axios';

function OrderList(){
         const [orders ,setOrders]=useState([]);
         // to get list of Items
         useEffect(()=>{
                 // code to fecth data from API 
                 const fetchOrderList=async()=>{
                 const API_ENDPOINT='http://localhost:5000/api/v1/getallorders';
                 const response= await axios.get(API_ENDPOINT);
                 //console.log(response.data.success)
                 
                 if(response.status==200){
                         console.log(response.data.orders)
                         setOrders(response.data.orders);
                 }else{
                     console.log(response);
                     console.log('Error');
                     setOrders([]);
                 }
             }
             fetchOrderList()
         },[]);


    return(
        <>
        <Sidebar/>
        <div className="p-4 sm:ml-64">
             <div className="p-4 border-2 border-orange-200 border-dashed rounded-lg dark:border-orange-700">
                   <div className="grid grid-cols-1 gap-4 mb-4">
                        <div className="rounded-sm border-2 border-b-black-700">
                            <div>
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                                OrderId
                                            </th>
                                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                                Mobile
                                            </th>
                                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Item
                                            </th>
                                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                                Price
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Address
                                            </th>
                                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                                Status
                                            </th>
                                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map((orderlistdata)=>(
                                        <tr className="border-b border-gray-200 dark:border-gray-700" key={orderlistdata._id}>
                                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                {orderlistdata._id}
                                            </td>
                                            <td className="px-6 py-4">
                                               {orderlistdata.mobile}
                                            </td>
                                              <td className="px-6 py-4">
                                               {orderlistdata.customer_name}
                                            </td>
                                            <td className="px-6 py-4">
                                               {orderlistdata.code}
                                            </td>
                                            <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                                {orderlistdata.orderamount}
                                            </td>
                                            <td className="px-6 py-4">
                                                {orderlistdata.delivery_address}
                                            </td>
                                            <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                            {orderlistdata.status}
                                            </td>
                                            <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                            <Link to=""><i className="fa fa-pencil-square-o editicon" aria-hidden="true"></i>Edit</Link>
                                            </td>
                                        </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
             </div>
        </div>
        </>
    )
}

export default OrderList