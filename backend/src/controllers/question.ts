import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { insertQuestion,getQuestionsAll,getQuestionById,updateQuestionById, deleteQuestions} from "../services/question"

 const getQuestion = async ({params}:Request,res:Response) => {
 try{
     const {id} = params
     const {surveyId} = params
     const responseItem = await getQuestionById(surveyId,id)
     const data = responseItem ? responseItem: 'Document not find'
     res.send(data)
 }catch (e){
     handleHttp(res,'ERROR_GET_QUESTION')
 }
 }

const getQuestions = async ({params}:Request,res:Response) => {
     try{
         const {surveyId} = params
         const responseItems = await getQuestionsAll(surveyId)
         const data = responseItems.length ? responseItems: 'Document not find'
         res.send(data)
     }catch (e){
       handleHttp(res,'ERROR_GET_QUESTION')
    }
 }

 const updateQuestion = async ({params,body}:Request,res:Response) => {
     try{
         const {id} = params
         const responseItem = await updateQuestionById(id,body)
         const data = responseItem ? responseItem: 'Document not found'
         res.send(data)
     }catch (e){
         handleHttp(res,'ERROR_UPDATE_QUESTION')
     }   
 }

const postQuestion = async ({body}:Request,res:Response) => {
    try{
        const responseItem = await insertQuestion(body)
        res.send(responseItem)
    }catch (e){
        handleHttp(res,'ERROR_POST_QUESTION')
    }  
}

const deleteQuestion = async ({params}:Request,res:Response) => {
     try{
         const {id} = params
         const responseItem = await deleteQuestions(id)
         const data = responseItem ? responseItem: 'Document not found'
         res.send(data)
     }catch (e){
         handleHttp(res,'ERROR_DELETE_QUESTION')
     }
 }

export { postQuestion,getQuestions,getQuestion,updateQuestion,deleteQuestion}