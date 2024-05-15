//Replace with Express app:
const express = require("express");
const app = express();

//Listen for requests:
const port = 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

// const http = require("http");
// const fs = require("fs");

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  res.sendFile("./contact.html", { root: __dirname });
});

app.use((req, res) => {
  res.status(404).sendFile("./404.html", { root: __dirname });
});

// const server = http.createServer((req, res) => {

//   if (req.url === "/") {
//     fs.readFile("./index.html", (err, data) => {
//       if (err) throw err;
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(data);
//     });
//   } else if (req.url === "/about") {
//     fs.readFile("./about.html", (err, data) => {
//       if (err) throw err;
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(data);
//     });
//   } else if (req.url === "/contact") {
//     fs.readFile("./contact.html", (err, data) => {
//       if (err) throw err;
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(data);
//     });
//   } else {
//     fs.readFile("./404.html", (err, data) => {
//       if (err) throw err;
//       res.writeHead(400, { "Content-Type": "text/html" });
//       res.end(data);
//     });
//   }
// });

// server.listen(8080);
