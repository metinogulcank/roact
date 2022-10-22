import mongoose from "mongoose";

const UserChema = mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    password:{
        type: String,
        require: true,
    },
    isAdmin:{
        type: Boolean,
        require: true,
        dafault: false,
    }
},
{
    timestamps:true
}
)

const User = mongoose.model("User",UserChema)

export default User;