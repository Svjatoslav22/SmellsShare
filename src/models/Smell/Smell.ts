import { Schema, model} from "mongoose";

interface Smell {
    smellType: string;
    reaction: { reaction: string; };
    createdAt: Date;
}


const smellSchema = new Schema({
    smellType: {
        type: String,
        required: true
    },
    reactions: [
        {
            reaction: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default model("Smell", smellSchema)
