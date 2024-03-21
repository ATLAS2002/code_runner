import z from "zod";

export const submissionSchema = z.object({
  username: z.string(),
  language: z.enum(["c++", "java", "javascript", "python"]),
  code: z.string(),
  stdin: z.string().default(""),
});
