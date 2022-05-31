const mongoose = require('mongoose');
const connectDB =async()=>{
    try{
        await mongoose.connect("mongodb+srv://mar1988:1988@cluster0.8trvai1.mongodb.net/test",{useNewUrlParser:true})
    }
    catch(err){

    }
};
module.exports = connectDB;


