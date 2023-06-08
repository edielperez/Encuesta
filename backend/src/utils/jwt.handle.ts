import {sign, verify} from "jsonwebtoken"
const JWT_SECRET = process.env.JWT_SECRET || "token.01023344543"

const generateToken = async (id: string) => {
    const jwt = sign({id},JWT_SECRET,{
        expiresIn: "24h",
    })
    return jwt
}

const verifyToken = (jwt:string) => {
    const isOk = verify(jwt,JWT_SECRET)
    return isOk
}

export {generateToken,verifyToken}