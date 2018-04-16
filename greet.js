const http=require('http');
const fs=require('fs')


fs.readFile('index.html',(err,html)=>{
  if(err) throw err;
  const server = http.createServer((rep, response)=>{
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(html);
    response.end();
  }).listen(3000,()=>{
    console.log('hello phuoc port 3000');
  })
})
