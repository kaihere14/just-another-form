import { z, zodUndefinedModel } from "../../schema";
import { userService } from "../../services";
import { createUserInputSchema, loginUserInputSchema } from "@repo/services/user/model";
import { publicProcedure, router } from "../../trpc";
import { generatePath } from "../../utils/path-generator";

const TAGS = ["Authentication"];
const getPath = generatePath("/authentication");

export const authRouter = router({
  createUser: publicProcedure
    .meta({ openapi: { method: "POST", path: getPath("/create-user"), tags: TAGS } })
    .input(createUserInputSchema)
    .output(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      const user = await userService.createUser(input);
      return { id: user };
    }),

  loginUser: publicProcedure
    .meta({ openapi: { method: "POST", path: getPath("/login-user"), tags: TAGS } })
    .input(loginUserInputSchema)
    .output(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      const user = await userService.loginUser(input);
      return { id: user };
    }),

});
