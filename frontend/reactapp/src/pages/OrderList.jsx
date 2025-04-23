import React from 'react'
import Sidebar from '../component/Sidebar';
import { Link } from 'react-router-dom';
function OrderList(){
    return(
        <>
        <Sidebar/>
        <div className="p-4 sm:ml-64">
             <div className="p-4 border-2 border-orange-200 border-dashed rounded-lg dark:border-orange-700">
                   <div className="grid grid-cols-1 gap-4 mb-4">
                        <div className="h-24 rounded-sm border-2 border-b-black-700">
                            <div>
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                                OrderId
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
                                        
                                        <tr className="border-b border-gray-200 dark:border-gray-700">
                                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                <p>ORD00123</p>
                                            </td>
                                            <td className="px-6 py-4">
                                                <p>Panner Chilly</p>
                                            </td>
                                            <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                                <p>Rs.999.00</p>
                                            </td>
                                            <td className="px-6 py-4">
                                                <p>Boring Road ,Patna</p>
                                            </td>
                                            <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                            In-Progress
                                            </td>
                                            <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                            <Link to=""><i class="fa fa-pencil-square-o editicon" aria-hidden="true"></i>Edit</Link>
                                            </td>
                                        </tr>
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