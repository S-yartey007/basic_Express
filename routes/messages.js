import { Router } from "express";

const messages = Router()

messages.get("/messages",(req,res)=> {
    res.json({message1: "message 2",message2:"message2"})
})

export default messages;