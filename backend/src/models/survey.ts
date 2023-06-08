import {Schema, Types, model, Model} from "mongoose"
import { Survey } from "../interfaces/survey.interface"

const surveySchema = new Schema<Survey>(
    {
        title:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const SurveyModel = model("surveys",surveySchema)
export default SurveyModel