/* Hello, world! Program in NodeJS*/
// console.log('Hello, World!');

let http = require('http');

http.createServer((request, response) => {
  // Send the HTTP header
  // HTTP Status: 200 : OK
  // Content Type: text/html
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(request.url);
  // Send the response body as 'Hello World'
  response.end('\n Hello World!\n');
}).listen(3000);

// console will print the massage
console.log('Serve running at localhost');
