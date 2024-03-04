import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
const app=express();
dotenv.config();


mongoose.connect("mongodb+srv://ghoshsunetra12:dzgJo8Z84DDp0aA7@cluster0.5z1l00y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));


app.listen(4000, () => {
    console.log('Server is running on port 4000!');
  });