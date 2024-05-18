const student = require('./Routes/student')

const express = require('express');
const app = express();

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/college')


app.use('/student',student)


app.listen(8080,()=>console.log("server is listeneing at port 8080"))