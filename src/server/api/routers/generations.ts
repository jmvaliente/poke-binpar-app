import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const base = process.env.API_BASE;

export const generationRouter = createTRPCRouter({
  all: publicProcedure.query(async () => {
    const data = await fetch(`${base}/generation/`);
    return data.json();
  }),
});
