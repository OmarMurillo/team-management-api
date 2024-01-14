
import { connect } from "mongoose"

export const connectDB = async () : Promise<void> => {
    try {
        await connect('mongodb+srv://omarAlberto:wolframio78@cluster0.53bfx.mongodb.net/Scrum')
        console.log("MongoDb connected")
    }catch(error){
        console.error(error)
    }
}