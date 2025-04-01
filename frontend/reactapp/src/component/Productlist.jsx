import React from "react";

function Productlist({pageHeader,products}){
    return(
        <>
        <h1>Page : {pageHeader}</h1>
         { products.map((data)=>(

        <div key={data.id}>
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt=""/>
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.description} </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.sellingPrice} </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.cateogry} </p>
            <button className="w-32 rounded-md bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">Buy</button>  
        </div>
        </a>
        </div>
         )
           )
         }


        </>
    )
}

export default Productlist