import mongoose from 'mongoose';
const { Schema } = mongoose;

//ID
//chatName
//isGroup-->Boolean
//users
//latest message
//groupAdmin
const chatSchema = new Schema({
   chatName:{
    type:String,
    trim:true,
    required:true
   },
   isGroup:{
    type:Boolean,
    default:false,
    required:true
   },
   users:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
   }],
   latestMessage:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Message"
   },
   groupAdmin:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
   }
    
  },{
    timestamps: true
  });

  export const Chat = mongoose.model('Chat', chatSchema);




