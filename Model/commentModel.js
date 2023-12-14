const mongoose= require('mongoose');
const commentSchema=mongoose.Schema(
    {
        post_id:{
            type:mongoose.Types.ObjectId,
            required:true,
        },
        comment:{
            type:String,
            required:true,
        },
        made_by:{
            type:mongoose.Types.ObjectId,
            required:true,
        }  
    }
    ,{
        timestamp:true
    }
);
const postModel= mongoose.model('post',postSchema);
module.exports = postModel;