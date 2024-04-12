import mongoose from "mongoose";

const Connection = async (username, password) =>{
    const URL = `mongodb+srv://${username}:${password}@cluster0.fqs4xd8.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true, })
        console.log("Connected Database")
    }catch(error){
        console.log("Error While Connecting Database", error);
    }
}

export default Connection