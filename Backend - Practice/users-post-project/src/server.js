import { app } from "./app/app.js";
import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./db/db.js";
dotenv.config()
const PORT = 3000;


app.use(express.json())
connectDB()
app.listen(PORT, ()=>{
  console.log(`Server Running on port: ${PORT}`)
})