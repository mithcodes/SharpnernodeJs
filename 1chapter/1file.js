console.log("node js"); 

/*
✅ 1. fs module kya hai?
- 'fs' ka matlab hai File System.
- Ye Node.js ka built-in module hai.
- Iska use hum file banane, padhne, likhne, delete karne ke liye karte hain.
*/
// "require() ka use kisi external ya built-in module ko apni file me lane ke liye hota hai."

const fs=require('fs')

/*
✅ 2. Syntax:
fs.writeFile(path, data, callback)

🔸 path     = kis file me likhna hai (agar file nahi hai to create ho jayegi)
🔸 data     = kya likhna hai us file me
🔸 callback = ek function jo likhne ke baad chalega (error ya success check karega)
*/

fs.writeFile("output.txt","writing file",(err)=>{
    if(err) console.log("error occured");
    else console.log("file written successfully");
    //use single quote
});
