const mongoose= require('mongoose');
const profileSchema=mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },
        location:{
            type:String,
            required:true,
        },
        occupation:{
            type:String,
            required:true,
        }
    }
);
const profileModel= mongoose.model('profile',profileSchema);
module.exports = profileModel;