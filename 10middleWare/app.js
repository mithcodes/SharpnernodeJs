 const express=require('express');
 const app=express();

 const myMiddleware=require('./middleware');

 app.use(myMiddleware);

 app.get('/',(req,res)=>{
   res.send('hello , after middlewere we get this response');
 })

 app.get('/about',(req,res)=>{
   res.send('about page')
 })

 app.listen(3000,()=>{
   console.log('server runninf at http:/localhost:3000');
 });
 