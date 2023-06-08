import { Router } from "express"
import { readdirSync } from "fs"

const PATH_ROUTER = `${__dirname}`
const router = Router()

const cleanFileName = (fileName:string) =>{
    const file = fileName.split('.').shift()
    return file
}
//Funcion para crear rutas por fichero ej: http://localhost:3006/question
readdirSync(PATH_ROUTER).filter((fileName) =>
{
    const cleanName = cleanFileName(fileName)
    if( cleanName !== "index")
    {
        import(`./${cleanName}`).then((moduleRouter)=>{
            console.log(`Se esta cargando la ruta.../${cleanName}`)
            router.use(`/${cleanName}`,moduleRouter.router)
        })
    }
     
} 
)

export { router }