const express=require('express');
const path=require('path');
const cd=path.join(__dirname,'../public');

var expressVariable=express();

//console.log(__dirname+'/../public');
console.log(publicPath);

expressVariable.listen(3000,()=>
{
        console.log('Server is ready on port 3000');
});