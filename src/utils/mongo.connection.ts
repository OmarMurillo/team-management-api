
import { connect } from "mongoose"

export const connectDB = async () : Promise<void> => {
    try {
        await connect(process.env.MONGO_STRING_CONNECTION as string)
        console.log("MongoDb connected")
    }catch(error){
        console.error(error)
    }
}