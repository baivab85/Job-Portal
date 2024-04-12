import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    cname:String,
    mobile:String,
    address:String,
    image:String,
    adate:String,
})

const User = mongoose.model('jobersportal', userSchema)

export default User