import bcrypt from "bcryptjs";
import ApiError from "../../common/utils/apiError.js";
import { generateAccessToken } from "../../common/utils/jwt.utils.js";
import { createUser } from "./auth.models.js";
import { getUserByName } from "./auth.models.js";

export const registerService = async (name, password) => {
    const existingUser = await getUserByName(name);
    if (existingUser) {
        throw ApiError.conflict("User with this username  already exists");
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await createUser(name, hashedPassword);
    const token = generateAccessToken({
        user_id: user.id,
        username: user.username,
    });

    return { user, token };
};

export const loginService = async (name, password) => {
    const user = await getUserByName(name);
    if (!user) {
        throw ApiError.unauthorized("Invalid   or password");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
        throw ApiError.unauthorized("Invalid username  or password");
    }

    const token = generateAccessToken({
        user_id: user.id,
        username: user.username,
    });

    const { password_hash, ...userWithoutPassword } = user;
    return { user: userWithoutPassword, token };
};