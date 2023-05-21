import mongoose from "mongoose";
 const Schema = mongoose.Schema;

const accountSchema =new Schema({
    _id : mongoose.Schema.Types.ObjectId,
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    verficationCode:Number,
    isVerified:{type:Boolean,default:false},
    mobile:String,
    avatar:{type:String,default:"https://www.blurredminds.com.au/wp-content/uploads/2021/07/Homepage-icons_200x200px-2.png"}

})

export default mongoose.model('Account',accountSchema);