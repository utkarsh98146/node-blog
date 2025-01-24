import mongoose from "mongoose";

export const connectDB=async()=>{
    try{
        mongoose.connect("mongodb://localhost:27017/blogDB")
    } catch(err){
        console.log("Connection fails due to",err)
    }
}

const blogSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,

    },
    file:{
        filename:{type:String},
        filetype:{type:String},
        filesize:{type:Number},
        data:{type:Buffer,required:true}
    },
  author:{
        type:String,
        required:true
    }

})  

export const blogDB =mongoose.model("blogDB",blogSchema)

/*
for router
file:{
        filename:file.originalname,
        filetype:file.mimetype,
        filesize:file.size,
        data:file.buffer, 
    },
 */