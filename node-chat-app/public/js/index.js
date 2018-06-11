//This is client file socket programming
var socket=io();
socket.on('connect',function(){
    console.log('Connected to the server');

    socket.emit('createEmail',{
        to:'pratik@gmail.com',
        email:'Hey..This is Pratik',

    });
})

socket.on('disconnect',function(){
    console.log('Disconnected from server');
})

socket.on('newEmail',function(email){
    console.log('New email',email);
})