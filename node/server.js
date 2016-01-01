var http = require('http');
var fs = require('fs');

function error404Request(response){
    response.writeHead(404,{"Context-Type":"text/plain"});
    response.write("Error 404:Cannot load the page!");
    response.end();
}


function onRequest(request, response){
    if(request.method=='GET' && request.url=='/') {
        console.log("A user made a request" + request.url);
        response.writeHead(200, {"Context-Type": "text/html"});
        fs.createReadStream('./index.html').pipe(response);
    }else{
        error404Request(response);
    }
}

http.createServer(onRequest).listen(8888);
console.log("Server is running...");
