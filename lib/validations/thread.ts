import * as z from "zod";
import { string } from "zod";

export const threadValidation = z.object({
  thread: z.string().nonempty().min(3, { message: "MINIMUM 3 CHARACTERS" }),
  accountId: z.string(),
});

export const CommentValdation = z.object({
  thread: z.string().nonempty().min(3, { message: "MINIMUM 3 CHARACTERS" }),
  accountId: z.string(),
});
