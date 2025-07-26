 const http=require('http');
 const testingSyntax=require('./syntax');

 const servr=http.createServer((req,res)=>{
    console.log(req.url,req.method);
    testingSyntax();
 });

 const PORT=3002;
 servr.listen(PORT,()=>{
    console.log(`server running on address http://localhost:${PORT}`)
 });