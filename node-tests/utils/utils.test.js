const utils=require('./utils');
it('should add two numbers',()=>{

    var res=utils.add(33,11);


    if(res!=44)
    {
        throw new Error(`Expected 44 but I got ${res}`);
    }
});

it('should multiply two numbers',()=>{

    var res=utils.multiply(3,11);


    if(res!=33)
    {
        throw new Error(`Expected 33 but I got ${res}`);
    }
});