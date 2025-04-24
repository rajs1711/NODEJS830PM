import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import ListFood from '../component/ListFood';


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
                
            <div className="headersection">
                <div className="logosection">
                    <p><span className="fa fa-star"></span>Food-Cart</p>
                </div>
                <Navbar/>
                <div className="pagetitlesection" data-aos="zoom-in" >
                    <h1>Online <span style={{color:"#fbff00"}}>Food Cart</span><span style={{color:"#b2f7b2"}}> Platform</span> for You</h1>
                    <h2>Taste Delicious Food at your door step</h2>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.</p>
                    <p className="callus">Call Us: <span>1800-419-0313</span></p>
                    <li><a href="">SignUp</a></li>
                </div>
          </div>

<div className="courses">
  <p>Deal Of The Day </p>
</div>

<ListFood/>
<br></br>

<div className="thirdparent">
    <div className="onechild" >
        <p>Enjoy Five-Start Meal at your Door <span>Step</span></p>
        <p> What are you waiting for ? </p>
         <button type="button" className="enroll">Order Now</button>
    </div>
</div>
<br></br>
<Footer/>





















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