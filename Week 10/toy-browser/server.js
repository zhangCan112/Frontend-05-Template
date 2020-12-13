const http = require('http')

http.createServer((request, response) => {
    let body = [];
    request.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString()
        console.log("body:", body);
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(
`<html maaa=a >
<head>
    <style>
    
       #body {
        background-color: rgb(0,0,0);
       }
       #container {
           display: flex;
           width: 500px;
           height: 300px;           
           background-color: rgb(255,255,255);
       }

       #container #myid {
           width: 200px;
           height: 100px;
           background-color: rgb(255,0,0);
       }

       #container #c1 {
           flex: 1;
           height: 300px;
           background-color: rgb(0,255,0);
       }
    </style>
</head>
<body id="body">
    <div id="container">
        <div id="myid"> </div>
        <div id="c1"> </div>
    </div>
</body>
</html>
`
            );
    })
}).listen(8088);

console.log("server started")