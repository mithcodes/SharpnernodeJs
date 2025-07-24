// 🔹 1. const http = require('http');
// ➡️ Ye line Node.js ka built-in http module import kar rahi hai.

// 📌 http module ka kaam hai:
// Server create karna, request aur response handle karna.



const http=require('http');

 

// 🔹 2. http.createServer((req, res) => { ... })
// ➡️ Ye line ek HTTP server bana rahi hai.

// 📌 createServer() ek function leta hai, jisme 2 cheezein aati hain:

// req = Request object → client ne kya bheja

// res = Response object → server kya bhejega wapas


 const server=http.createServer((req, res)=>{
 console.log(req); 
 console.log(req.url, req.method, req.headers);

//  Part	     Meaning
// req.url  	  Kaunsa page/browser request kar raha hai
// req.method	  Request type (GET, POST, etc.)
// req.headers	  Request ki extra info (browser, content, cookies, etc.)
 



 process.exit();
//  🔹 Ye line jab chalegi to Node.js ka program wahi pe turant band ho jayega, chahe uske baad aur code ho — wo execute nahi hoga.
 });


//  🔸 server.listen() function Node.js ko bolta hai ki:

// Server ko start karo

// Aur kisi bhi aane wali request ko accept karo

// Port 3000 par suno (listen)

//  server.listen(3000);

const PORT=3001;
server.listen(PORT,()=>{
    console.log(`server running on port http://localhost:${PORT}`)
})
