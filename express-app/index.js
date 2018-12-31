const express = require('express');
const mongoose = require('mongoose');
require('./models/User');
const User = mongoose.model('user');
const app = express();

const mongoURI= 'mongodb://mongo-db:27017/express-app';

mongoose.connect(mongoURI, {
    useMongoClient: true
  }).then(connected => console.log('MongoDB connected'))
  .catch(error => console.error('Mongodb connection error: ', error));

app.get('/createUser',(req,res)=>{
    const user ={name:'Chessy', age:25, experience:'3 years'};
    new User({name:user.name,age:user.age,experience:user.experience}).save().then(()=>{
        res.status(200).send({success:true,message:"User created!"});      
    }).catch(err=>res.status(400).send(err)); 
});

app.get('/getUser',(req,res)=>{
    User.find({}, (err,user)=>{
        if(err) res.status(400).send({success:false,message:`Error : ${err}`});
        else res.status(200).send({success:true,message:JSON.stringify(user)});
    });
});
app.get('/deleteUser',(req,res)=>{
    User.deleteOne({}, (err,user)=>{
        if(err) res.status(400).send({success:false,message:`Error : ${err}`});
        else res.status(200).send({success:true,message:JSON.stringify(user)});
    });
});
app.get('/',(req,res)=>{
    res.status(200).send({success:true,message:`Visit /createUser to create a user and visit /getUser to get user details.`});
});

app.listen(8080, ()=>console.log(`Express app listening on port 8080`));