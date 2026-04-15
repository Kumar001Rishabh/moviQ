import ApiResponse from "../../common/utils/apiResponse.js";
import {registerService, loginService} from './auth.services.js'
export const register = async (req, res, next) => {
  try {
    const { user, token } = await registerService(
      req.body.username,
      req.body.password
    );
    ApiResponse.created(res, "Registration successfull", { user, token });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { user, token } = await loginService(req.body.username, req.body.password);
    ApiResponse.ok(res, "Login successfull", { user, token });
  } catch (error) {
    next(error);
  }
};