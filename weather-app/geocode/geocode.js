const request=require('request');
var geoCodeAddress=(argv,callback)=> {

    debugger
    var encodedAddress=encodeURIComponent(argv.address);
    debugger
    console.log(encodedAddress);

    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=[your API key]`
        ,json:true//Here we are setting json true to get back header in json format(application/json)
    },(error,response,body)=>{

        if(error)
        {
            
            callback('Unable to connect to Google servers.');
        }
        else if(body.status=='ZERO_RESULTS')
        {

            callback('Unable to find address');
        }
        else if(body.status=='OK')
        {

            callback(undefined,{
                address:body.results[0].formatted_address,
                lattitude:body.results[0].geometry.location.lat,
                longitude:body.results[0].geometry.location.lng
            });
          //  console.log(`Address of this object is:${body.results[0].formatted_address}`);
            //console.log(`Lattitude is :${body.results[0].geometry.location.lat} and Longitude is ${body.results[0].geometry.location.lng}`);

        }

    })
}

module.exports={
    geoCodeAddress
};
