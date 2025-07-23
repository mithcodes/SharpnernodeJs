// http – Node ka in-built module hai server create karne ke liye.

// fs – File System module, files read/write karne ke kaam aata hai.

const http = require('http');
const fs = require('fs');

// http.createServer() ek function leta hai jisme 2 objects hote hain:

// req → Request object (client ne kya bheja)

// res → Response object (server kya reply karega)

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

//   Ye line request ke URL, method (GET/POST) aur headers console me print karegi.

// Debugging me help karta hai, jaise kaun page pe request ja rahi hai, form POST ho raha hai ya GET.

 if (req.url === '/') {
  // Jab browser / par jaata hai, to HTML form show kiya jaata hai.

    res.setHeader('Content-Type', 'text/html');
    // setHeader() → response ka type set karta hai (text/html means HTML code send ho raha).
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Enter Your Details:</h1>');
    res.write('<form action="/submit-details" method="POST">');
    // action="/submit-details" → Form data kis URL pe bhejna hai
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" id="male" name="gender" value="male" />')
    res.write('<label for="female">Female</label>')
    res.write('<input type="radio" id="female" name="gender" value="female" />')
    res.write('<br><input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
    // res.end() → Response khatam karta hai (warna browser wait karta rahega).

  } else if (req.url.toLowerCase() === "/submit-details" &&
        req.method == "POST") {
    fs.writeFileSync('user.txt', 'Prashant Jain');
    // fs.writeFileSync() → File bana kar data likhta hai (yahan fixed text likh raha hai)
    res.statusCode = 302;
    res.setHeader('Location', '/');
  }

//   Agar koi aur URL aaye, to default message show hoga:

// "Like / Share / Subscribe"
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Like / Share / Subscribe</h1></body>');
  res.write('</html>');
  res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});