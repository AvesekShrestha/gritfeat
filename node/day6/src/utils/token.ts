import jwt from "jsonwebtoken";
import { jwt_secret } from "../config";

const generateToken = (data: object): string => {
    const token = jwt.sign(data, jwt_secret as jwt.Secret, { expiresIn: "24h" });
    return token;
};

const verifyToken = (token : string)=>{
    const data = jwt.verify(token , jwt_secret)
    return data
}

export { generateToken, verifyToken }