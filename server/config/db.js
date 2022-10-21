import mongoose from "mongoose";

const connectToMongo = async()=>{
    const res = await mongoose.connect(
        "mongodb+srv://gallery:gallery116@cluster0.4gljodu.mongodb.net/?retryWrites=true&w=majority")

        if(res){
            console.log("connected to DB")
        }
}

export default connectToMongo;