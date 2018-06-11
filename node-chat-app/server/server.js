const express=require('express');
const path=require('path');
const publicPath=path.join(__dirname,'../public');

var expressVariable=express();

//console.log(__dirname+'/../public');
console.log(publicPath);

expressVariable.use(express.static(publicPath));

expressVariable.listen(3000,()=>
{
        console.log('Server is up on port 3000');
});