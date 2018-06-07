const request=require('request');

var getWeather=(lattitude,longitude,callback)=>
{

    request({
        url:`https://api.darksky.net/forecast//${lattitude},${longitude}`,
        json:true
    }, (error,response,body)=>
    {


        if(error)
        {

            callback('Unable to connect to Forecast.io server');
        }
        else if(response.statusCode===400)
        {

            callback('The given location (or time) is invalid.');
        }
        else if(response.statusCode===200)
        {

            callback(undefined,{
                temparature:body.currently.temperature,
                apparentTemperature:body.currently.apparentTemperature

            });

        }

    });


};



module.exports={
    getWeather
};