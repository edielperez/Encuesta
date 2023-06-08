import { NextFunction, Request,Response } from "express"
//Para crear log de la aplicacion
const logMiddleware = (req:Request,res: Response, next: NextFunction) => {
    console.log("Mid")
    next()
}

export {logMiddleware}