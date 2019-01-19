const http=require('http');
const hostname="127.0.0.1";
const port=3000;

//create server on the parameter
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, My name is Komaldeep Kaur.\nMy Student Id is 300926834\nI am pursuing Software Engineering Technology');
  });
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
 