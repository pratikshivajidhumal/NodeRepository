const express=require('express');

const hbs=require('hbs');

const fs=require('fs');

var app=express();

const port=process.env.PORT||3000;



app.set('view engine','hbs') ;

hbs.registerPartials(__dirname+'/views/partials')

hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
})


hbs.registerHelper('screamIt',(text)=>{
    return text.toUpperCase();
})


//register handler
app.get('/',(req,res)=>{
//res.send('<h1>Hello Express!</h1>');
res.send({
    name:'Pratik',
    likes:[
       'biking',
       'chess'
    ]
});
});

//__dirname stores the path of node-web-server root directory



/*app.use((req,res,next)=>
{
    res.render('maintainance.hbs');

});*/

app.use(express.static(__dirname+'/public'));
//to register middleware
app.use((req,res,next)=>{
var now=new Date().toString();

var log=`${now}: ${req.method} ${req.url}`;

console.log(log);

    fs.appendFile('server.log',log+'\n',(error)=>{

        if(error)
        {
            console.log('Unable to append file');
        }
    });
    console.log();
    next();


});


app.get('/about',(req,res)=>
{
   res.render('about.hbs',{
       pageTitle:'About page!',

   });
});




app.get('/home',(req,res)=>
{
    res.render('home.hbs',{
        pageTitle:'About page!',
        welcomeMessage:'Welcome to our website'
    });
});


app.get('/bad',(req,res)=>{
    res.send({
        name:'Bad request',
        Error:[
            '404',

        ]
    });
});

app.listen(port,()=>{
    console.log(`Server is ready on port ${port}`);
});

