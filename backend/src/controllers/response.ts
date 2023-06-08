import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { insertResponse,getResponsesAll,getResponseById,updateResponseById, deleteResponses,getResult} from "../services/response"
import mongoose from "mongoose"

 const getResponse = async ({params}:Request,res:Response) => {
 try{
     const {id} = params
     const {questionId} = params
     const responseItem = await getResponseById(questionId,id)
     const data = responseItem ? responseItem: 'Document not found'
     res.send(data)
 }catch (e){
     handleHttp(res,'ERROR_GET_RESPONSE')
 }
 }

 const getResults = async ({params}:Request,res:Response) => {
    try{
        const {idSurvey} = params
        const responseItem = await getResult(idSurvey)
        console.log(responseItem)
        const data = responseItem ? responseItem: 'Document not found'
        res.send(data)
    }catch (e){
        handleHttp(res,'ERROR_GET_RESPONSE')
    }
 }

const getResponses = async ({params}:Request,res:Response) => {
     try{
         const {questionId} = params
         const responseItems = await getResponsesAll(questionId)
         const data = responseItems.length ? responseItems: 'Document not found'
         res.send(data)
     }catch (e){
       handleHttp(res,'ERROR_GET_RESPONSE')
    }
 }

 const updateResponse = async ({params,body}:Request,res:Response) => {
     try{
         const {id} = params
         const responseItem = await updateResponseById(id,body)
         const data = responseItem ? responseItem: 'Document not found'
         res.send(data)
     }catch (e){
         handleHttp(res,'ERROR_UPDATE_RESPONSE')
     }   
 }

const postResponse = async ({body}:Request,res:Response) => {
    try{
        const responseItem = await insertResponse(body)
        res.send(responseItem)
    }catch (e){
        handleHttp(res,'ERROR_POST_RESPONSE')
    }  
}

const deleteResponse = async ({params}:Request,res:Response) => {
     try{
         const {id} = params
         const responseItem = await deleteResponses(id)
         const data = responseItem ? responseItem: 'Document not found'
         res.send(data)
     }catch (e){
         handleHttp(res,'ERROR_DELETE_RESPONSE')
     }
 }

export { postResponse,getResponses,getResponse,updateResponse,deleteResponse,getResults}