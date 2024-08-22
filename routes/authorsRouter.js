import { Router } from "express";

const authorsRouter = Router();

authorsRouter.get("/",(req,res) => res.send("All authors"));
authorsRouter.get("/:authorID",(req,res) => {
    const {authorID} = req.params;
    res.send(`Author id ${authorID}`)
})

export default authorsRouter;