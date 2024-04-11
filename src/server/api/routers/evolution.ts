import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const base = process.env.API_BASE;

export const evolutionRouter = createTRPCRouter({
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const data = await fetch(`${base}/evolution-chain/${input.id}`);
      return data.json();
    }),
});
