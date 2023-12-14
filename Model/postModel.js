const mongoose= require('mongoose');
const profileSchema=mongoose.Schema(
    {
        user_id:{
            type:mongoose.Types.ObjectId,
            required:true,
        },
        image_url:{
            type:String,
            required:true,
        },    
    }
    ,{
        timestamp:true
    }
);
const postModel= mongoose.model('post',postSchema);
module.exports = postModel;