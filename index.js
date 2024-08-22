import express from "express";
import "dotenv/config.js"
import path from "node:path"
import url from "url"
import myMidddleware from "./middleware/middleware.js";
import userRouter from "./routes/userRouter.js";
import errorRouter from "./routes/errorRouter.js";
const PORT = process.env.PORT
const app = express();

//Getting the directory name
const filePath = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(filePath)

//Setting up the views
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

//Serving Static Assests
const assetsPath = path.join(__dirname,"public");
app.use(express.static(assetsPath));

//Some middleware
app.use(express.urlencoded({extended:false}));
app.use(myMidddleware);

//lists for ejs
const links = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" },
  ];

//Users for ejs
const users = [
    "Rose",
    "Everlyn",
    "Prometheus"
]
//render ejs templates
app.get("/",(req,res)=> {
    res.render("index",{links,users})
})

app.get("/about",(req,res)=> {
    res.render("about",{Name:"Company Name",Location: "Company location",links})
})





app.use("/users",userRouter)

app.use(errorRouter)
app.listen(PORT,() => console.log(`Express app listening at port ${PORT}`))