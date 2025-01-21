import { Router } from "express";
import userRoute from "./userRouter"


const router = Router();

router.use('/users',userRoute)

export default router;

