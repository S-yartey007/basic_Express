import { Router } from "express";
import { getUserByID,getUsers,createUser } from "../controllers/userController.js";
const userRouter = Router();

userRouter.get("/",getUsers);
userRouter.get("/:id",getUserByID);
userRouter.post("/",createUser);

export default userRouter;