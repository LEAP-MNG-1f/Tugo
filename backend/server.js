// const http = require("http")

// const server=http.createServer((req,response)=>{
//     console.log(req);
//     response.end ("wassup")
// })

// server.listen(6969)
import express from "express";

const port= 6969
const app = express()

app.listen(port,()=>{
console.log("ajillav")
})