import { Survey } from "../interfaces/survey.interface"
import SurveyModel from "../models/survey"

//Service for create a Survey
const insertSurvey = async (item: Survey) =>{
    const responseInsert = await SurveyModel.create(item)
    return responseInsert
}

//Service for get survey all 
const getSurveysAll = async () =>{
    const responseItems = await SurveyModel.find({})
    return responseItems
}

//Service for get survey by Id 
const getSurveyById = async (id: string) =>{
    const responseItem = await SurveyModel.findOne({_id:id})
    return responseItem
}
//Update Survey 
const updateSurveyById = async (id: string, data: Survey) =>{
    const responseItem = await SurveyModel.findByIdAndUpdate({_id:id},data,{new:true})
    return responseItem
}

//Delete Survey
const deleteSurveys = async (id: string) =>{
    const responseItem = await SurveyModel.findByIdAndRemove({_id:id})
    return responseItem
}

export {insertSurvey,getSurveysAll,getSurveyById,updateSurveyById,deleteSurveys}
