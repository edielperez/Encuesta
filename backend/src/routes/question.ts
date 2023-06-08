import { Router } from "express"
import {  postQuestion,getQuestions,getQuestion,updateQuestion,deleteQuestion } from "../controllers/question";
import { checkJwt } from "../middleware/session";
const router = Router()

router.get('/:surveyId',getQuestions)
router.get('/:surveyId/:id',getQuestion)
router.post('/',postQuestion)
router.put('/:id',updateQuestion)
router.delete('/:id',deleteQuestion)

export {router}