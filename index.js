const http = require("http");
const { request } = require("node:http");

http
.createServer((req,res) => {
    switch (request.url){
        case "/":
            response.writeHead(200,{
                "Content-Type": "text/html",
            });
            response.write("<h1>Home Page!</h1)");
            response.end();
            break;

          case "/about":
              response.writeHead(200,{
                  "Content-Type": "text/html",

              });
              response.write("<h2>About Page!</h2>");
              response.end();
              break;


            case "api/test":
                console/log("rest api called");              
                  response.writeHead(200,{
                 "Content-Type": "application/json",
                });
                response.write(JSON.stringify({ foo: "bar"}));
                response.end();
                break;

            case "api/test2":
                console/log("rest api called");              
                response.writeHead(200,{
               "Content-Type": "application/json",
              });
              response.write(JSON.stringify({ foo: "bar"}));
              response.end();
              break;
                

          default:
              response.writeHead(404,{
                  "Content-Type": "text/html",

              });
		     console.log("404 page has been visited");
              response.write("<p>404 Page Not found!</p>"); 
              response.end();
              break;
    }
  
})
.listen(8080);
