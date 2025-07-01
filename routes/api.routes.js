import { Router } from "express";
import auth from "./application_routes/auth.route.js";
import admin from "./application_routes/admin.route.js";
const router = Router();
router.use("/", auth);
router.use("/", admin);
export default router;
