const request=require('request');
request({
    url:'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=AIzaSyD3KdI1efUsGctlAAxPiJQD03k7hBwxCfQ'
,json:true
},(error,response,body)=>{
console.log(JSON.stringify(body,undefined,2));
})