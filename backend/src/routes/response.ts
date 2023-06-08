import { Router } from "express"
 import { deleteResponse, getResponses, getResponse, postResponse, updateResponse, getResults } from "../controllers/response";
import { checkJwt } from "../middleware/session";
 const router = Router()

router.get('/:questionId',getResponses)
router.get('/:questionId/:id',checkJwt,getResponse)
router.get('/api/results/:idSurvey/',getResults)
router.post('/',postResponse)
router.put('/:id',updateResponse)
router.delete('/:id',deleteResponse)

export {router}