var square=x=>x*x;

var user=
    {
        name:'Andrew',
        sayHi:()=>
        {
            console.log(arguments);
            console.log('Hi..'+this.name);
        },
        sayHiAlt()
        {
            console.log(arguments);
            console.log('Hi..'+this.name);
        }
    };

console.log(user.sayHi(1,2,3));