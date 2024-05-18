const express = require('express')
const router = express.Router();

const bodyparser = require('body-parser');
router.use(bodyparser.json());

const student = require('../models/student')

const cors = require('cors')
router.use(cors())
const students = [];
const professors = [];
router.get('/all',async(req,res)=>{
    let data = await student.find();
    res.send(data)
    console.log(data)
})

router.post('/add',async(req,res)=>{
   try{
      let newstudent = await student.create(req.body)
     students.push(newstudent)
    res.status(201).json({message : "student data added successfully"})
   }
   catch(e){
     res.status(500).json({message : e.message})
   }
})

router.delete('/delete/:rollnumber',async(req,res)=>{
   try{
     let rollnumber = req.params.rollnumber;
     await student.deleteOne(rollnumber);
     res.status(200).json({message: "student deleted successfully"})
   }
   catch(e){
    res.status(500).json({message : e.message})
   }
})

module.exports = router;