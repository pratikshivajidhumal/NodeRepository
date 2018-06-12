var maxTime=3000;
var eventDoubler=function(v,callback)
{

    var waitTime = Math.floor(Math.random()*(maxTime+1));


    if (v%2==0)//even ok
    {
      setTimeout(function () {

          console.log("Even call");

          callback(null,"success",waitTime);

      },waitTime);
    }
    else//odd err
    {
        setTimeout(function () {

            console.log("Odd call");
            callback(new Error("Odd no not allowed"),null,waitTime);

        },waitTime);
    }

};
var handleResults=function(err,results,time)
{
    console.log("handleResults function");

    if(err)
    {
     console.log("ERROR:"+err.message+" ("+time+" ms");

    }
    else
    {
        console.log("The results is:"+results+" ("+time+" ms)");
    }
};
eventDoubler(2,handleResults);
eventDoubler(3,handleResults);
console.log("-------");


