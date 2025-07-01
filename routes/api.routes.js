import { Router } from "express";
import auth from "./application_routes/auth.route.js";
const router = Router();
router.use("/", auth);
export default router;
