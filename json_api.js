const http = require('http');

http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);

  // return JSON data
  const data = {
    'status' : 200,
    'mesage' : "Hello World",
    'err' : false
  };

  res.writeHead(200, { 'Content-type': 'application/json' });
  res.write(JSON.stringify(data));
  res.end();
}).listen(3000, () => {
  console.log('Server is running on port 3000');
});
