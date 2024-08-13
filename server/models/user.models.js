import mongoose, {Schema} from "mongoose"

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        toLowerCase:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        toLowerCase:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        toLowerCase:true,
        trim:true
    },
    picture:{
        type:String,
        default:'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
      },
},  { timestaps: true })

export const User = mongoose.model("User",userSchema)