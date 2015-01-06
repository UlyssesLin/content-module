//Ulysses Lin 1/6/2015

//http server
var http=require('http');
var fs=require('fs');
var path=require('path');
var static_contents=require('./modules/static.js');
//creating a server
server=http.createServer(function(request,response){
    //'text/html' doesn't allow for .css or .js
    // response.writeHead(200,{ 'Content-type':'text/html' });
    //Ignores favicon requests
    if(request.url!='/favicon.ico'){
        var url_result=static_contents.find(request.url);
        if(url_result){
            fs.readFile(url_result,function(errors,contents){
                response.write(contents);
                response.end();
            });
        }else{
            response.end('File not found!!!');
        }
    }
});
server.listen(7000);
console.log("Running in localhost at port 7000");