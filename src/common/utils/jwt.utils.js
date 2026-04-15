import "dotenv/config";
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

const generateAccessToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: process.env.JWT_ACCESS_EXPIRESIN,
    });
};
const verifyAccessToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
}

export { generateAccessToken, verifyAccessToken };