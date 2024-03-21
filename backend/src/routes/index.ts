import { Router } from "express";
import { validateContent } from "../middlewares/submit";

const router = Router();

router.post("/submit", validateContent, (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Submission received" });
});

export default router;
