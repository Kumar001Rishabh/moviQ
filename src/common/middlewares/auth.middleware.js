import ApiError from "../utils/apiError";
import { verifyAccessToken } from '../utils/jwt.utils.js';

const authMiddleware = (req, res, next) => {
    try {
        let token = req?.headers?.authorization.split(" ")[1];
        if (!token || !token.startsWith("Bearer ")) {
            throw ApiError.unauthorized("token is missing")
        }

        const decoded = verifyAccessToken(token);

        req.user = decoded;
        next();

    } catch (error) {
        next(ApiError.unauthorized("Invalid token"))
    }
}

export default authMiddleware;