import { Router } from "express"
 import { deleteResponse, getResponses, getResponse, postResponse, updateResponse, getResults } from "../controllers/response";
import { checkJwt } from "../middleware/session";
 const router = Router()

router.get('/:questionId',checkJwt,getResponses)
router.get('/:questionId/:id',checkJwt,getResponse)
router.get('/api/results/:idSurvey/',checkJwt,getResults)
router.post('/',checkJwt,postResponse)
router.put('/:id',checkJwt,updateResponse)
router.delete('/:id',checkJwt,deleteResponse)

export {router}