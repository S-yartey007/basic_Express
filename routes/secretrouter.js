import { Router } from "express";

const secretRouter = Router();

secretRouter.all('/',(req,res,next) => {
    console.log("First handler");
    next();
},(req,res)=> res.send("last handler"))

secretRouter.all('/type',(req,res) => {
    res.send(Buffer.from("whoop"))
})

secretRouter.all('/json',(req,res) => {
    res.send({body:"json"});
})
secretRouter.all('/html',(req,res) => {
    res.send("<h1>Some html</h1>")
})
secretRouter.all('/404',(req,res) => {
    res.status(404).send("Cannot be found")
})
secretRouter.all('/500',(req,res) => {
    res.status(500).send({erro: "Something is wrong"})
})

secretRouter.all('/type',(req,res) => {
    
})
export default secretRouter