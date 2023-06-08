import { Router } from "express"
import { deleteSurvey, getSurveys, getSurvey, postSurvey, updateSurvey } from "../controllers/survey";
import { logMiddleware } from "../middleware/log";
import { checkJwt } from "../middleware/session";
const router = Router()

router.get('/',checkJwt,getSurveys)
router.get('/:id', checkJwt,getSurvey)
router.post('/',checkJwt,postSurvey)
router.put('/:id',checkJwt,updateSurvey)
router.delete('/:id',checkJwt,deleteSurvey)

export {router}