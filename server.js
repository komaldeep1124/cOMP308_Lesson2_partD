const http=require('http');
const hostname="myInto";
const port=3000;

//create server on the parameter
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from Komaldeep Kaur.My Student Id is 300926834\n');
  });
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
 