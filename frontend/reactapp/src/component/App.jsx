import React from 'react'
//import Product from './Product'
//import Productlist from './Productlist'
import Form from './Form'
import LearnHook from './LearnHook'
function App(){
    const ProductList=[
    {id:1,name:'HP Laptop',sellingPrice:'83993' ,cateogry:'SmartLaptop',description:'Best laptop of this Cateogry , which runs very fast'},
    {id:2,name:'Lenovo Laptop',sellingPrice:'45666' ,cateogry:'SmartLaptop',description:'Best laptop of this Cateogry , which runs very fast'},
    {id:3,name:'Asus Laptop',sellingPrice:'6665' ,cateogry:'SmartLaptop',description:'Best laptop of this Cateogry , which runs very fast'},
    {id:4,name:'Mac1 Laptop',sellingPrice:'8777' ,cateogry:'SmartLaptop',description:'Best laptop of this Cateogry , which runs very fast'},
    {id:5,name:'Macbook Air Laptop',sellingPrice:'8777' ,cateogry:'SmartLaptop',description:'Best laptop of this Cateogry , which runs very fast'}
      ]
    return(
        <>
        {/*<Product name="Mac Book" sellingPrice="10000" cateogry="Smart Phone" description="Best Mobile Phone Of This Cteogry, Smart Phone with Speed and network capability"/>*/}
        {/*<Productlist pageHeader='Smart Phone' products={ProductList}/>*/}
        {/*<Form/>*/}
        <LearnHook/>
        </>
    )
}

export default App