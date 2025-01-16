// PROMISE
/*
PROMISE => 
      resolve()
      reject()

How many state of promise 
        4 state :
             pending 
             resolve
             reject 
             fullfilled

*/




function regsistration(){

   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('API CALL registration sucecssfully')  
        let res={
            "msg":"promise resolved for registration",
            "status":200
        }
        resolve(res)
    },2000)
   })


}

function sendEmail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let rs =true;  // we assume true false comes from third part API
            if(rs){
                resolve('promise resolve send email')
            }else{
                reject('Not able to send email')
            }
        },2000)
       })
}

function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('API CALL  Login sucecssfully')  
            
            let rs =false;  // we assume true false comes from third part API
            if(rs){
                resolve('promise resolve for login')
            }else{
                reject('Error promise not resolved')
            }
        },2000)
       })
}
function getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
              
            resolve('API CALL getdata sucecssfully')
        },2000)
       })
}

regsistration()
.then((d1)=>{
    let {msg,status}=d1
    console.log(`Msg: ${msg}`);
    console.log(`resCode: ${status}`);
    return sendEmail()
})
.then((d2)=>{
    console.log(d2)
    return login()
})
.then(()=>{    // use to handle resolve
    console.log(d3)
     getdata()
})
.catch((data_err)=>{  // use to handle reject
  console.log(data_err)
})
.finally(()=>{   // execute everytime either resolve or reject
    console.log('Execution Completed')
})

console.log('other work');











   
