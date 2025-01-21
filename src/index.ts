import  express  from "express";
import { query } from "./database";
import router from "./routers";


const app= express();

//middleware to parse JSON
app.use(express.json());

app.use("/api",router)

app.listen(3000,()=>{
    console.log("server is running")
});

