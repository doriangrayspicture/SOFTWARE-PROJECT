import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
const app=express();
dotenv.config();


mongoose.connect(process.env.MONGO
)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));


app.listen(4000, () => {
    console.log('Server is running on port 4000!');
  });