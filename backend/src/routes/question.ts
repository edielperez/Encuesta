import { Router } from "express"
import {  postQuestion,getQuestions,getQuestion,updateQuestion,deleteQuestion } from "../controllers/question";
import { checkJwt } from "../middleware/session";
const router = Router()

router.get('/:surveyId',checkJwt,getQuestions)
router.get('/:surveyId/:id',checkJwt,getQuestion)
router.post('/',checkJwt,postQuestion)
router.put('/:id',checkJwt,updateQuestion)
router.delete('/:id',checkJwt,deleteQuestion)

export {router}