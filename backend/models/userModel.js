const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    name : {type : String,required : true},
    age : {type : String,required : true},
    post : {type : String,required : true},
    email : {type : String,required : true},
    contact : {type : String,required : true},
    isMarried : {type : String,required : true}
},{
    timestamps : true
});

module.exports = mongoose.model("user" , UserSchema);