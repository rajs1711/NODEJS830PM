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
          
           <div className="chlid1" data-aos="slide-up" >
               <img src="https://www.ruchifoodline.com/recipes//cdn/recipes/chicken-biryani.jpg" className="myimg"/>
               <p>Chicken Biryani</p>
               <p>
                 <span className="fa fa-star"></span>
                 <span className="fa fa-star"></span>
                 <span className="fa fa-star"></span>
                 <span className="fa fa-star"></span>
                 <span className="fa fa-star-half-o"></span>
               </p>
               <p><span>Rs 1100</span> Rs. 599 </p>
               <button type="button" className="signup">Order Now</button>
           </div>
           <div className="chlid2" data-aos="slide-up">
             <img src="https://www.chefkunalkapur.com/wp-content/uploads/2021/11/3F3A1876-copy-1300x867.jpg" className="myimg"/>
             <p>Panner Kadahai</p>
               <p>
                 <span className="fa fa-star"></span>
                 <span className="fa fa-star"></span>
                 <span className="fa fa-star"></span>
                 <span className="fa fa-star"></span>
                 <span className="fa fa-star-half-o"></span>
               </p>
                <p><span>Rs 999</span> Rs. 499 </p>
                <button type="button" className="signup">Order Now</button>
               </div>
           <div className="chlid3" data-aos="slide-up">
             <img src="https://www.hridyafoods.com/wp-content/uploads/2025/02/chilli-mushroom.jpg" className="myimg"/>
               <p>Chilli-Mushroom</p>
               <p>
                 <span className="fa fa-star"></span>
                 <span className="fa fa-star"></span>
                 <span className="fa fa-star"></span>
                 <span className="fa fa-star"></span>
                 <span className="fa fa-star-half-o"></span>
               </p>
               <p><span>Rs 599 </span>  Rs.399</p>
               <button type="button" className="signup">Order Now</button>
           </div>
        </div>
        </>
    )
}

export default ListFood