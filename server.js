const express = require("express");
const app = express();
const https = require("https");
const fs = require("fs");
const PORT = 4015;
   
https.createServer(
    {
      key: fs.readFileSync("/etc/letsencrypt/live/spamigor.site/privkey.pem"),
      cert: fs.readFileSync("/etc/letsencrypt/live/spamigor.site/fullchain.pem"),
	  ca: fs.readFileSync("/etc/letsencrypt/live/spamigor.site/chain.pem"),
    }, function(request, response){
       
    let filePath = "index.html";
    if(request.url !== "/"){
        filePath = request.url.substring(1);
        console.log(request.url);
    }
    if(request.url == "/fiches"){
        filePath = request.url.substring(1)+"/hueindex.html";
        console.log(request.url);
        console.log(filePath);
    }
    fs.readFile(filePath, function(error, data){
               
        if(error){                   
            response.statusCode = 404;
            response.end("Resourse not found!");
        }   
        else{
            response.end(data);
        }
    });
     
}).listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});