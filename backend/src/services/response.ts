import mongoose from "mongoose"
import { Response } from "../interfaces/response.interface"
import ResponseModel from "../models/response"

//Service for create a Response
const insertResponse = async (item: Response) =>{
    const responseInsert = await ResponseModel.create(item)
    return responseInsert
}

//Service for get responses all for by question 
 const getResponsesAll = async (questionId: string) =>{
     const responseItems = await ResponseModel.find({questionId})
     return responseItems
 }

const getResult = async (idSurvey: string) => {
  const responseResults = await ResponseModel.aggregate([
    {
      $match: { idSurvey: new mongoose.Types.ObjectId(idSurvey) },
    },
    {
      $lookup: {
        from: 'questions', 
        localField: 'questionId',
        foreignField: '_id',
        as: 'question',
      },
    },
    {
      $unwind: '$question',
    },
    {
      $group: {
        _id: { question: '$question.question',seletedOption: '$seletedOption' },
        count: { $sum: 1 },
      },
    },
  ]).exec();

  return responseResults;
};

 //Service for get response by Id 
 const getResponseById = async (questionId: string, id: string) =>{
     const responseItem = await ResponseModel.findOne({questionId,_id:id})
     return responseItem
 }

 //Update Response 
 const updateResponseById = async (id: string, data: Response) =>{
     const responseItem = await ResponseModel.findByIdAndUpdate({_id:id},data,{new:true},)
     return responseItem
 }

//Delete Response
 const deleteResponses = async (id: string) =>{
     const responseItem = await ResponseModel.findByIdAndRemove({_id:id})
     return responseItem
 }

export {insertResponse,getResponsesAll,getResponseById,updateResponseById,deleteResponses,getResult}
