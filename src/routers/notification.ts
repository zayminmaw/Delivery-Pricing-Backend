import express, { Router } from "express";
import controller from "../controllers/notification";
import extractJWT from "../middlewares/extractJWT";
import morgan from "morgan";

const router: Router = express.Router();

router.get("/", morgan("tiny"), controller.read);
router.get("/ref/:ref", morgan("tiny"), controller.readByRef);
router.post("/", morgan("tiny"), extractJWT, controller.create);
router.put("/:id", morgan("tiny"), extractJWT, controller.update);
router.delete("/:id", morgan("tiny"), extractJWT, controller.deleteItem);

export default router;
