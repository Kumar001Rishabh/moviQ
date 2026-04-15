import { Router } from "express";
import validate from "../../common/middlewares/validate.middleware.js";
import { register, login } from "./auth.controller.js";
import authDto from "./dto/auth.dto.js";

const router = Router();

router.post("/register", validate(authDto), register);
router.post("/login", validate(authDto), login);

export default router;