 const express=require('express');

 const app=express();

 app.use((req, res,next)=>{
    console.log("first dummy middleware");
    next();
 })

 app.use((req, res, next)=>{
console.log("second dummy middleware")
 })

 const PORT=3002;

 app.listen(PORT,()=>{
    console.log(`server runnning on address http://localhost:${PORT}`);

 })