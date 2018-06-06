console.log("Starting async-basics.js ");

setTimeout(()=>
{
console.log('Inside of callback');
},2000

);

setTimeout(()=>{
        console.log('Inside of 0 sec callback');
},
    0);

console.log("Finishing async-basics.js ");


