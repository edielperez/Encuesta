import {Schema, Types, model, Model} from "mongoose"
import { Question } from "../interfaces/question.interface"

const questionSchema = new Schema(
    {
        surveyId: {type: Schema.Types.ObjectId, ref: 'surveys', required: true },
        question:{
            type: String,
            required: true
        },
        options:[{
            type: String,
            required: true
        }]
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const QuestionModel = model("questions",questionSchema)<Question>
export default QuestionModel