import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const base = process.env.API_BASE;

export const generationRouter = createTRPCRouter({
  all: publicProcedure.query(async () => {
    const data = await fetch(`${base}/generation/`);
    return data.json();
  }),
  url: publicProcedure
    .input(z.object({ url: z.string() }))
    .query(async ({ input }) => {
      const data = await fetch(input.url);
      return data.json();
    }),
});
