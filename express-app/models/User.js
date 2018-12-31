const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name:String,
    age:Number,
    experience:String
});

mongoose.model('user',userSchema);
