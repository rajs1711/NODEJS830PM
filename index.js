// Setup Express server
const express = require('express');
const app = express(); 

const PORT=5000;

// Define a route
app.get('/',(req,res)=>{

    res.send('Hello i am from express server');
})

app.get('/home',(req,res)=>{

    res.send('Hello i am from homepage');
})
app.get('/faq',(req,res)=>{

    res.send('Hello i am from faq');
})

app.listen(PORT,()=>{
    console.log(`Your express server sarted on port ${PORT}`)
})
