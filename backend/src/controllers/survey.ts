import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { insertSurvey, getSurveysAll, getSurveyById,updateSurveyById, deleteSurveys } from "../services/survey"

const getSurvey = async ({params}:Request,res:Response) => {
try{
    const {id} = params
    const responseItem = await getSurveyById(id)
    const data = responseItem ? responseItem: 'Document not find'
    res.send(data)
}catch (e){
    handleHttp(res,'ERROR_GET_SURVEY')
}
}

const getSurveys = async (req:Request,res:Response) => {
    try{
        const responseItems = await getSurveysAll()
        res.send(responseItems)
    }catch (e){
        handleHttp(res,'ERROR_GET_SURVEYS')
    }
}

const updateSurvey = async ({params,body}:Request,res:Response) => {
    try{
        const {id} = params
        const responseItem = await updateSurveyById(id,body)
        res.send(responseItem)
    }catch (e){
        handleHttp(res,'ERROR_UPDATE_SURVEY')
    }   
}

const postSurvey = async ({body}:Request,res:Response) => {
    try{
        const responseItem = await insertSurvey(body)
        res.send(responseItem)
    }catch (e){
        handleHttp(res,'ERROR_POST_SURVEY')
    }  
}

const deleteSurvey = async ({params}:Request,res:Response) => {
    try{
        const {id} = params
        const responseItem = await deleteSurveys(id)
        res.send(responseItem)
    }catch (e){
        handleHttp(res,'ERROR_DELETE_SURVEY')
    }
}

export {getSurvey, getSurveys, postSurvey, updateSurvey, deleteSurvey }