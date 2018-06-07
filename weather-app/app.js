
const yargs=require('yargs');

const geocode=require('./geocode/geocode');

const weather=require('./weather/weather');

const argv=yargs.options({
  a:{
      demand:true,
      alias:'address',
      describe:'Address to fetch weather for',
      string:true
  }

})
    .help()
    .alias('help','h')
    .argv;

geocode.geoCodeAddress(argv,(errorMessage,results)=>{

    if(errorMessage)
    {
      console.log(errorMessage);
    }
    else
    {
        debugger

        weather.getWeather(results.lattitude,results.longitude,(errorMessage,results)=>{
            debugger
            if(errorMessage)
            {
                console.log(errorMessage);
            }
            else
            {
                console.log(JSON.stringify(results,undefined,2));
            }
        });
    }
});





