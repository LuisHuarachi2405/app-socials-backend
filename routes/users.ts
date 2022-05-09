import { Router } from "express";
import { getUsers } from "../controllers/controller.user";


const router = Router()

router.get('/', getUsers)


export default router