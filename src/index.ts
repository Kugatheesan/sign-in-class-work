import  Express  from "express";
// import { query } from "./database";
import router from "./routers";


const app=Express()

app.use(Express.json());

app.use("/api",router)

app.listen(3000,()=>{
    console.log("server is running")
})

