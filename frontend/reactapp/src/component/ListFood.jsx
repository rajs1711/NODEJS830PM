import React,{useState ,useEffect} from 'react'
import axios from 'axios';
function ListFood(){
      const [foods,setFoods]=useState([]);
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

    return(
        <>
        <div className="secondparent">
          { foods.map((data)=>(
           <div className="chlid1" data-aos="slide-up" id={data._id} >
               <img src="https://www.ruchifoodline.com/recipes//cdn/recipes/chicken-biryani.jpg" className="myimg"/>
               <p>{data.name}</p>
               <p>
                 <span className="fa fa-star"></span>
                 <span className="fa fa-star"></span>
                 <span className="fa fa-star"></span>
                 <span className="fa fa-star"></span>
                 <span className="fa fa-star-half-o"></span>
               </p>
               <p>Rs.{data.price} </p>
               <p style={{"textAlign":"center","color": "red","fontWeight":"bold"}}>{data.category}</p>
               <button type="button" className="signup">Order Now</button>
           </div>
          ))}
        </div>
        </>
    )
}

export default ListFood