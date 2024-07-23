import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();

const app=express();
app.use(express.json());
app.use(cors());

//connection to MOngoDB

const connectDB=async()=>{
  const conn =await mongoose.connect(process.env.MONGODB_URL)

  if(conn){
    console.log(`MongoDB Connected Successfully✅`)
  }
};
connectDB();

app.get('/',(req,res)=>{
    res.json({
        message:`Welcome to Task Management System`
    })
})

const PORT=process.env.PORT||5000;


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})