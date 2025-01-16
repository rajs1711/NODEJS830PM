//Js =>  Synchronous or Asyncronous 
//Note: Js is Synchronous
//Callback Hell

// function holdtime(){
//     let ms=4000 + new Date().getTime();
//     while(new Date() < ms){}
// }
function regsistration(callback){

    setTimeout(()=>{
        console.log('registration')
        callback();
    },2000)
    
    
}

function sendEmail(callback){
    setTimeout(()=>{
        console.log('Send Email');
        callback();
    },4000)
    
}

function login(callback){
    setTimeout(()=>{
        console.log('Login')
        callback()
    },1000)
    
}

function getdata(){
    setTimeout(()=>{
        console.log('Get Data')
    },3000)
}


// This is callback hell
regsistration(()=>{
    sendEmail(()=>{
        login(()=>{
            getdata()
        })
    })
})


console.log('other work')


================  PROMISE =========
   
PROMISE => 
      resolve()
      reject()

How many state of promise 
        4 state :
             pending 
             resolve
             reject 
             fullfilled
