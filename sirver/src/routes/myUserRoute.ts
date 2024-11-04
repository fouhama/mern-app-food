import express from "express";
import MyUserController from "../Controller/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";

const router = express.Router();

router.get("/", jwtCheck, jwtParse, MyUserController.getCurrentUser);

router.post("/", jwtCheck, MyUserController.createCurrentUser);

router.put("/", jwtCheck, jwtParse, MyUserController.updateCurrentUser);

export default router;
