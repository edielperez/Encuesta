import { Router } from "express"
import { deleteSurvey, getSurveys, getSurvey, postSurvey, updateSurvey } from "../controllers/survey";
import { logMiddleware } from "../middleware/log";
import { checkJwt } from "../middleware/session";
const router = Router()

router.get('/',getSurveys)
router.get('/:id',getSurvey)
router.post('/',postSurvey)
router.put('/:id',updateSurvey)
router.delete('/:id',deleteSurvey)

export {router}