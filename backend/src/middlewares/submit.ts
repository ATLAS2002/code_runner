import type { RequestHandler } from "express";
import { submissionSchema, validate } from "../validation";

export const validateContent: RequestHandler = (req, res, next) => {
  const data = validate(req.body, submissionSchema);
  if (!data) {
    return res.status(400).json({ message: "Invalid data" });
  }

  next();
};
