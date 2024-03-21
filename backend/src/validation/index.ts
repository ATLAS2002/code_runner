import { ZodError, type ZodSchema } from "zod";

export * from "./submission-schema";

function isZodError(error: unknown): error is ZodError {
  return error instanceof ZodError;
}

export const validate = <T extends ZodSchema>(
  data: unknown,
  schema: T
): T | null => {
  try {
    return schema.parse(data);
  } catch (error) {
    if (isZodError(error)) {
      console.error("[VALIDATION ERROR]:", error.issues[0]?.message);
    } else {
      console.error("[UNKNOWN ERROR]:", error);
    }
    return null;
  }
};
