import mongoose from "mongoose"

export const connectDB = () =>{
    mongoose
    .connect("mongodb://admin:1234@localhost:27017/ivtb-22?authSource=admin")
    .then(()=>console.log("DB connected!"))
    .catch((err)=>console.error(err))
}

