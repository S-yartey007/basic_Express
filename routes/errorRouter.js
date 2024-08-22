import { Router } from "express"
const router = Router()

router.use((err,req,res,next)=> {
    console.error(err)
    res.status(500).send(err.message)
})

export default router