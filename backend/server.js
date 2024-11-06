// const http = require("http")

// const server=http.createServer((req,response)=>{
//     console.log(req);
//     response.end ("wassup")
// })

// server.listen(6969)
import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const port = 6969;
const app = express();

app.use(bodyParser.json());
app.use(cors());

const users = [
  {
    id: 1,
    name: "tugu",
    age: 23,
  },
  {
    id: 2,
    name: "MB",
    age: 32,
  },
];

app.get("/users", (request, response) => {
  response.send(users);
});

// app.post("/users", (request, response) => {
//   // const userName = request.body.name;
//   // const userAge = request.body.Age;
//   const idNumber = Date.now().toString();
//   const { name, age } = request.body;

//   const newUser = {
//     id: idNumber,
//     name: name,
//     age: age,
//   };

//   users.push(newUser);
//   response.send(users);
// });

app.put("/users", (request, response) => {
  console.log(request.body);
  response.send(users);
});

app.delete("/users", (request, response) => {
  console.log(request.body);
  response.send(users);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
