import {Schema, Types, model, Model} from "mongoose"
import { Response } from "../interfaces/response.interface"

const responseSchema = new Schema(
    {
        idSurvey:{type: Schema.Types.ObjectId, ref: 'surveys', required: true },
        questionId: {type: Schema.Types.ObjectId, ref: 'questions', required: true },
        seletedOption:{
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const ResponseModel = model("responses",responseSchema)<Response>
export default ResponseModel