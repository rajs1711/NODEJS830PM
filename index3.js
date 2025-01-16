// Async and Await
/* 
Note: Function which return promise can be call by await method ,
      we can use await under async method 
      */
function regsistration(){

    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
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
         },4000)
        })
 }
 
 function login(){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{

             let rs =false;  // we assume true false comes from third part API
            
              if(rs){
                 resolve('promise resolve for login')
             }else{
                 reject('Error promise not resolved')
             }
         },3000)
        })
 }
 function getdata(){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
               
             resolve('API CALL getdata sucecssfully')
         },2000)
        })
 }


  async function executeMethod(){
       try{
        const reg_res= await regsistration();
        console.log(reg_res);

        const sendemail_res= await sendEmail();
        console.log(sendemail_res);

        const login_res= await login();
        console.log(login_res);

        const getdata_res= await getdata();
        console.log(getdata_res);

       }catch(err){
         console.log(err)
       }finally{
        console.log('Execution Completed')
       }

  }
  executeMethod()






 