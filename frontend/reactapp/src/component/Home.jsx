import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import Navbar from './Navbar';

function Home(){
      /*const mystyle={
        backgroundColor:"blue",
        width:300,
        height:200,
        textAlign:"center",
        padding:"10px"
      }*/

    return(
        <>
           
           <Navbar/>
           <h1 style={{color:'red',fontSize:'20px'}}> Homepage </h1>
           {/*<div className="divStyle"style={{width:300,height:200,backgroundColor:"red"}}>
            <h1>Hello This is the example of Inline Css</h1>
           </div>
           <div style={mystyle}>
            <h2>This is the example of internal css</h2>
           </div>
            <div className="divStyle rounded-xl">
            <h2>This is the example of External css</h2>
            <button className="w-32 rounded-md bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">Save</button>
           </div>*/}
            
        </>
    )
}

export default Home