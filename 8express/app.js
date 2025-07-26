
//  app.get('/', ...)
// → Ye line bolti hai:

// Jab koi user GET request bheje / path par (yaani homepage pe), to niche wala function run karo.

// 🔹 req = Request
// → Client (browser/postman) se jo data aata hai, wo isme hota hai.

// 🔹 res = Response
// → Server (tumhara code) se client ko jo reply dena hai, wo isme bhejte hain.

// 🔹 res.send('...')
// → Ye client ko ek message bhej raha hai as a response:

// "👋 Hello! This is your Express server."

const express=require('express');
const app=express();

//home route

app.get('/',(req,res)=>{
   res.send('hello , this is your server');
})

//server listen

const PORT=3000;
app.listen(PORT,()=>{
   console.log(`server is running on http://localhost:${PORT}`)
})