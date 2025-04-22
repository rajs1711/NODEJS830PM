import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
const Dashboard=()=>{
    return(
        <>

  <Sidebar/>
<div className="p-4 sm:ml-64">
   <div className="p-4 border-2 border-orange-200 border-dashed rounded-lg dark:border-orange-700">
      <div className="grid grid-cols-3 gap-4 mb-4">
         <div className="flex items-center justify-center h-24 rounded-sm bg-blue-800 dark:bg-blue-800 border-2 border-b-black-700">
            {/* <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p> */}
            <div>
              <p style={{color:"orange"}}><b>New Orders</b></p>
              <p style={{color:"orange"}}><b>256</b></p>
            </div>
         </div>
         <div className="flex items-center justify-center h-24 rounded-sm bg-orange-50 dark:bg-orange-800">
            <div>
              <p style={{color:"orange"}}><b>Total Orders</b></p>
              <p style={{color:"orange"}}><b>55</b></p>
            </div>
         </div>
         <div className="flex items-center justify-center h-24 rounded-sm bg-orange-50 dark:bg-orange-800">
              <div>
              <p style={{color:"orange"}}><b>Total Users</b></p>
              <p style={{color:"orange"}}><b>55</b></p>
            </div>
         </div>
      </div>
      <div className="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
         <div className="flex items-center justify-center rounded-sm bg-green-50 h-28 dark:bg-green-800">
              <div>
              <p style={{color:"orange"}}><b>Today Sales</b></p>
              <p style={{color:"orange"}}><b>Rs .10000</b></p>
            </div>
         </div>
         <div className="flex items-center justify-center rounded-sm bg-green-50 h-28 dark:bg-green-800">
              <div>
              <p style={{color:"orange"}}><b>Current Month Sales </b></p>
              <p style={{color:"orange"}}><b>Rs.1026883.00</b></p>
            </div>
         </div>
         <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
      </div>
      {/* <div className="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
         <p className="text-2xl text-gray-400 dark:text-gray-500">
            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
         </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
         <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
      </div> */}
   </div>
</div>

        </>
    )
}


export default Dashboard