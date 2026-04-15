import ApiError from "../utils/apiError.js";
import { verifyAccessToken } from '../utils/jwt.utils.js';

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            throw ApiError.unauthorized("token is missing");
        }

        const token = authHeader.split(" ")[1];
        const decoded = verifyAccessToken(token);

        req.user = decoded;
        console.log("i was here")
        next();

    } catch (error) {
        next(ApiError.unauthorized("Invalid token"))
    }
}

export default authMiddleware;