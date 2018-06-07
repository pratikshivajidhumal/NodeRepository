var somePromise=new Promise((resolve,reject)=>
{
  setTimeout(()=>
  {
      //here you can only do one of them
      reject('Unable to fulfill promise');
      },
      2500);

});


//This function can gets called only once as opposite to callback function
somePromise.then((message)=>
{
    console.log('Success:', message);
},(errorMessage)=>{
console.log('Error:'+errorMessage)
});