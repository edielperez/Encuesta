import { Question } from "../interfaces/question.interface"
import QuestionModel from "../models/question"

//Service for create a Question
const insertQuestion = async (item: Question) =>{
    const responseInsert = await QuestionModel.create(item)
    return responseInsert
}

//Service for get questions all for by survey 
 const getQuestionsAll = async (surveyId: string) =>{
     const responseItems = await QuestionModel.find({surveyId})
     return responseItems
 }

 //Service for get survey by Id 
 const getQuestionById = async (surveyId: string, id: string) =>{
     const responseItem = await QuestionModel.findOne({surveyId,_id:id})
     return responseItem
 }

 //Update Question 
 const updateQuestionById = async (id: string, data: Question) =>{
     const responseItem = await QuestionModel.findByIdAndUpdate({_id:id},data,{new:true},)
     return responseItem
 }

//Delete Question
 const deleteQuestions = async (id: string) =>{
     const responseItem = await QuestionModel.findByIdAndRemove({_id:id})
     return responseItem
 }

export {insertQuestion,getQuestionsAll,getQuestionById,updateQuestionById,deleteQuestions}
