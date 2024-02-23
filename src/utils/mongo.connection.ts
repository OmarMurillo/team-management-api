
import { connect } from "mongoose"

export const connectDB = async () : Promise<void> => {
    try {
        await connect('')
        console.log("MongoDb connected")
    }catch(error){
        console.error(error)
    }
}
