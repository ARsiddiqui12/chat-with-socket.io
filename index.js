var app = require('express')();

var server = require('http').Server(app);

var io = require('socket.io').listen(server);

app.get('/',function(req,resp){

resp.sendFile(__dirname+"/index.html");

});

let user = 0 ;

io.on('connection',function(socket){


	

socket.on('chat.message',function(message){

      //socket.emit('testerEvent', { message: message});

      // socket.broadcast.emit('testerEvent', { message: message});

      io.sockets.emit('testerEvent', {uid:message.uid,message:message.message});
     
	  //console.log("("+message.uid+") Message:"+message.message);

});

console.log("User is Connected.");


 socket.on('disconnect', function () {

    console.log("User is Disconnected.");

  });



});




server.listen(3000,function(){

console.log("Node Server Is Running...!");

});