const request=require('request');
request({
    url:'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=AIzaSyD3KdI1efUsGctlAAxPiJQD03k7hBwxCfQ'
,json:true//Here we are setting json true to get back header in json format(application/json)
},(error,response,body)=>{

    console.log(`Address of this object is:${body.results[0].formatted_address}`);
    console.log(`Lattitude is :${body.results[0].geometry.location.lat} and Longitude is ${body.results[0].geometry.location.lng}`);
})